/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import { Text, View, StyleSheet, Pressable, } from 'react-native';
import { Link } from 'expo-router';
/* -------------------------------------------------------------------------- */

type DayListItem = {
    day: number;
}

export default function DayListItem({ day }: DayListItem) {
    return (
      <Link href={`/day${ day }`} asChild>
        <Pressable style={styles.box}>
          <Text style={styles.text}>{day}</Text>
        </Pressable>
      </Link>
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
      fontFamily: 'Sevillana',
    }
  });