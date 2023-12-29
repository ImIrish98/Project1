import { Text, View, StyleSheet } from 'react-native';

type DayListItem = {
    day: number;
}

export default function DayListItem({ day }: DayListItem) {
    return (
        <View style={styles.box}>
          <Text style={styles.text}>{day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#E3E3E3',
      //width: 100,
      //height: 100,
      
      flex: 1,
      aspectRatio: 1,
  
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#1E43B1',
      borderRadius: 20,
      
  
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    text: {
      color: '#1E43B1',
      fontSize: 70,
    }
  });