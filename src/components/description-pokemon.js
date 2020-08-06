import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
import Abilities from './abilities';
import Moves from './moves';
import Types from './types';
import Stats from './stats';

const image = { uri: "https://www.wallpapertip.com/wmimgs/90-908937_trigraphy-wallpaper-pokemon-logo-pokemon-go-blue-team.jpg" };

const DescriptionPokemon = ({ route, navigation }) => {

    const [pokemon, setPokemon] = useState({
        name: '',
        sprites: {},
        types: [],
        isLoading: false,
        base_experience: 0,
        abilities: [],
        moves: [],
        stats: []
    })

    useEffect(() => {
        const url = route.params;
        setPokemon({ ...pokemon, isLoading: true })
        if (url.item) {
            getDataDescription(url.item)
        }
    }, [])

    const getDataDescription = async (url) => {
        try {
            const { data: { name, base_experience, abilities, moves, species, sprites, stats, types } } = await axios.get(url);
            setPokemon({
                ...pokemon,
                isLoading: false,
                name: name,
                base_experience: base_experience,
                abilities: abilities,
                sprites: sprites,
                moves: moves,
                types: types,
                stats: stats
            })
        } catch (error) {
            console.log(error)
        }
    }
    if (!pokemon.isLoading) {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground resizeMode='repeat' source={require('../../assets/pattern.jpg')} style={styles.pattern}>
                    <Card
                        title={pokemon.name || null}
                        containerStyle={{paddingBottom: 50, borderRadius: 10}}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.viewStyle}>
                                <Image
                                    source={{ uri: pokemon.sprites.front_default }}
                                    style={styles.viewStyle}
                                />
                            </View>
                            <View style={styles.viewStyle}>
                                <Text style={styles.itemTextBold}>{pokemon.base_experience} EXP</Text>
                                <View>
                                    <Text>Tipo: </Text>
                                    {pokemon.abilities ?
                                        <Types types={pokemon.types} />
                                        : null
                                    }
                                </View>
                                <View>
                                    <Text>Habilidades:</Text>
                                    {pokemon.abilities ?
                                        <Abilities abilities={pokemon.abilities} />
                                        : null
                                    }
                                </View>

                            </View>
                        </View>
                    </Card>
                    <Card
                        title="Estadisticas"
                        containerStyle={{paddingBottom: 20, borderRadius: 10}}
                    >
                        <Stats stats={pokemon.stats} />
                    </Card>
                    <Card
                        title="Movimientos"
                        containerStyle={{
                            borderRadius: 10,
                            paddingBottom: 50,
                        }}
                    >
                        {pokemon.moves ?
                            <Moves moves={pokemon.moves} />
                            : null
                        }
                    </Card>
                    <View style={{height: 50}} />
                </ImageBackground>
            </ScrollView>
        )
    } else {
        return (
            <Text>Cargando...</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        paddingTop: 10,
        padding: 8,
        flexDirection: "column",
    },
    viewStyle: {
        width: 150,
        height: 150,
        marginBottom: 3

    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    itemTextBold: {
        fontWeight: "bold"
    },
    pattern: {
        width: '100%',
        height: '100%',
    },
})

export default DescriptionPokemon;