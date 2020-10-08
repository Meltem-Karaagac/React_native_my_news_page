import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';


const App = () => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <Image></Image>
                            <Text style={styles.header}>McCarthy Hocamizdan anektodlar</Text>
                        </View>

                        <View style={styles.newsboxes}>
                            <Image
                                style={styles.images}
                                source={require('./images/picture.2.png')}
                            />
                            <Text style={styles.newstext}>"Bugünün Başarıları Dünün Yapılması İmkansız Olarak Görülenleridir"</Text>
                        </View>

                        <View style={styles.newsboxes}>
                            <Image
                                style={styles.images}
                                source={require('./images/picture.1.png')}
                            />
                            <Text style={styles.newstext}>"Hayatımızda olaylara tepki vermek yerine olaylara karşılık verelim."</Text>
                        </View>

                        <View style={styles.newsboxes}>
                            <Image
                                style={styles.images}
                                source={require('./images/picture.3.png')}
                            />
                            <Text style={styles.newstext}>"Knowing is not enough; we must apply.Wishing is not enough; we must do."</Text>
                        </View>

                        <View style={styles.newsboxes}>
                            <Image
                                style={styles.images}
                                source={require('./images/picture.4.png')}
                            />
                            <Text style={styles.newstext}>"Dusuncelerini degistirirsen bakis acini degistirirsin.Sahip oldugun bakis acisi,yasam kaliteni belirler. "</Text></View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "white",
    },
    body: {
        backgroundColor: "white",
        margin: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    newsboxes: {
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 10,
        marginBottom: 10,

    },
    images: {
        width: 370,
        height: 300,
        borderRadius: 10,
    },

    newstext: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,

    }
});

export default App;