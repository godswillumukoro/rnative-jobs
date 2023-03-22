import {useState} from 'react'
import {View, ScrollView, SafeAreaView, Text} from 'react-native'
import {Stack, useRouter} from 'expo-router'

import {COLORS, icons, images, SIZES} from '../constants'
// import {NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
    return (
            // <View>
            //     <Text>Home Page</Text>
            // </View>

            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
                <Stack.Screen
                    options={{
                        headerStyle: {backgroundColor: COLORS.lightWhite},
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
                        )
                    }}
                />
            </SafeAreaView>
    )
}

export default Home