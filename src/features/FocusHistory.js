import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return <Text style={styles.title}>No nos hemos enfocado en nada aun:</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Cosas en que nos enfocaremos:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 1,
  },
  item:{
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md
  },
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold"
  },
})