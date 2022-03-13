import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem"



const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item})=> <CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;