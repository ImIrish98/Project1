import { Link, Stack, router } from 'expo-router';
import React, { useState } from 'react';
import{ Text, View, StyleSheet, SafeAreaView, Pressable, } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import  Animated, { FadeIn, FadeOut, SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight, ZoomIn, ZoomInEasyDown, ZoomInEasyUp, ZoomInLeft, ZoomInRight, ZoomOutLeft, ZoomOutRight } from 'react-native-reanimated';

const onboardingSteps = [
    {
        icon: 'list',
        title: 'Welcome to Fine Irish Art Catalogue!',
        description: '"Fine Irish Art Catalogue showcases a diverse array of talent, presenting a curated collection that celebrates the unique voices of various artists. Explore our platform to discover the rich tapestry of Irish creativity through an inspiring range of artworks."', 
    },
    {
        icon: 'picture',
        title: 'Follow Favorite Artist?',
        description: 'Stay in the loop with the latest art collections from your favorite artist with our innovative tracking feature.', 
    },
    {
        icon: 'fire',
        title: 'Save Artwork',
        description: 'Unleash the power to curate your own personal art gallery with our user-friendly platform. Now, you can effortlessly save the artworks that capture your interest and revisit them at your leisure on your personalized profile. Whether youre building a wish list, planning a purchase, or simply want to savor the beauty of a particular piece', 
    },
    
   
];



export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex == onboardingSteps.length - 1;
        if (isLastScreen){
            endOnboarding();
        } else {
         setScreenIndex(screenIndex + 1);   
        }     
    };
    const onBack = () => {
        const isFirstScreen = screenIndex == 0;
        if (isFirstScreen){
            endOnboarding();
        } else {
         setScreenIndex(screenIndex - 1);   
        }     
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };



    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack), 
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
    );

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false}} /> 
            <StatusBar style='light' /> 
            
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View   
                        key={index}
                        style={[
                            styles.stepIndicator, 
                            {backgroundColor: index == screenIndex ? '#FFDA11' : 'gray'},
                        ]} 
                    />
                ))}
            </View>

            <GestureDetector        gesture={swipes}>   
                <View               style={styles.pageContent}
                                    key={screenIndex}
                >   
                    <Animated.View  entering={FadeIn} 
                                    exiting={FadeOut}
                        >
                        <SimpleLineIcons    style={styles.image} 
                                            name={data.icon} 
                                            size={150} 
                                            color="#FFDA11" 
                        />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text  entering={SlideInRight} 
                                        exiting={SlideOutLeft}
                                        style={styles.title}>
                                        {data.title}
                        </Animated.Text>

                        <Animated.Text  entering={ZoomInRight.duration(450)} 
                                        exiting={ZoomOutLeft}
                                        style={styles.description}>
                                        {data.description}
                        </Animated.Text>
            

                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}> Skip </Text>

                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}> Continue </Text>
                            </Pressable>  
                        </View>
                    </View>
                </View> 
            </GestureDetector> 
        </SafeAreaView>       
    );
}

const styles = StyleSheet.create({
    page: {
        //alignItems:'center', 
        justifyContent: 'center', 
        flex:1,
        backgroundColor: '#15141A',

     
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop:70,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontWeight: '700',
        letterSpacing: 1.3,
    },
    description: {
        color: 'gray',
        fontSize: 18,
        lineHeight: 18,
    },
    footer: {
        marginTop: 'auto',
    },

    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontWeight: '700',
        fontSize: 20,
       
        padding: 10,
        paddingHorizontal: 25,
    },


    //steps
    stepIndicatorContainer:{
        flexDirection: 'row',
        marginTop:40,
        gap: 8,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1, 
        height:3, 
        backgroundColor: 'gray',
        borderRadius: 10,
        
    },       
})