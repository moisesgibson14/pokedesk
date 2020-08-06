import React from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
const image = { uri: "https://wallpaperset.com/w/full/e/6/2/438228.jpg" };

export default class FlatListPokemon extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            page: 1,
            isLoading: false,
            url: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => this.getData(this.state.url))
    }

    getData = async (url) => {
        try {
            const { data: { results, next } } = await axios.get(url);
            this.setState({
                data: this.state.data.concat(results),
                url: next,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    renderRow = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    this.props.navigation.navigate('Detalle', {
                        item: item.url
                    })
                }>
                <View style={styles.item}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Image style={{width: 20, height: 20}} source={require('../../assets/right.png')} />
                </View>
            </TouchableOpacity>
        )
    }

    handleLoadMore = () => {
        this.setState(
            { page: this.state.page + 1, isLoading: true },
            () => this.getData(this.state.url)
        )
    }

    renderFooter = () => {
        return (
            this.state.isLoading ?
                <View style={styles.loader}>
                    <Text> Cargando... </Text>
                </View> : null
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    </View>
                    <View>
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={0.5}
                            ListFooterComponent={this.renderFooter}
                            contentContainerStyle={{ paddingBottom: 200 }}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 160,
        marginBottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        paddingVertical: 20,
        width: 200,
        height: 200 * 0.6,
    },
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        backgroundColor: '#ecf0f1',
        flexDirection: "column"
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    },
    item: {
        height: 60,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 10,
        padding: 10,
        marginBottom: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    itemText: {
        fontSize: 20,
        padding: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignContent: 'center',
        paddingVertical: 20,
    },
})