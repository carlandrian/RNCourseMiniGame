import { View, StyleSheet, StatusBar, Platform} from 'react-native';

function AndroidSafeAreaView({children}) {
    return (
        <View style={styles.AndroidSafeArea}>
            {children}
        </View>
    )
}

export default AndroidSafeAreaView;

const styles = StyleSheet.create( {
    AndroidSafeArea: {
        flex: 1,
        // backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})