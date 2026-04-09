import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Weekly')
  return (
    <View style={{ backgroundColor: "#0d0d0d", flex: 1 }}>
      <View style={styles.navbar}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>P</Text>
        </View>
        <Text style={styles.brand}>PayU</Text>
        <Ionicons name="search-outline" size={24} color="white" />
        <View>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <View style={styles.badge}><Text style={styles.badgeText}>2</Text></View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 19 }}>
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 17, flex: 1 }}>Hey,Alex</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 19, marginTop: 5 }}>
        <Text style={{ color: "grey" }}>Add your yesterday's expense</Text>
      </View>
      <LinearGradient
        colors={["#FED4B4", "#3BB9A1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: 250,
          width: "90%",
          marginTop: 20,
          marginHorizontal: 19,
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginTop: 20, marginLeft: 12 }}>ADRBank</Text>
        <Text style={{ color: "#fff", fontWeight: 600, fontSize: 26, marginLeft: 12, marginTop: 22 }}>8763 1111 2222 0329</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 70, marginLeft: 12, marginRight: 12 }}>
          <View>
            <Text style={{ color: "#fff" }}>Card Holder Name</Text>
            <Text style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>ALEX</Text>
          </View>
          <View>
            <Text style={{ color: "#fff" }}>Expired Date</Text>
            <Text style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>10/28</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={{ marginTop: 19, marginLeft: 19 }}>
        <Text style={{ color: "#fff", fontWeight: 600, fontSize: 19 }}>Your expenses</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#2A2A2A", borderRadius: 30, padding: 4, marginLeft: 19, marginRight: 19, marginTop: 9 }}>

        <TouchableOpacity onPress={() => setActiveTab('Weekly')}
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 50,
            alignItems: "center",
            backgroundColor: activeTab === 'Weekly' ? "white" : "transparent"
          }}
        >
          <Text style={{ color: activeTab === 'Weekly' ? '#141414' : '#888', fontWeight: '600' }}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Monthly')}
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: activeTab === 'Monthly' ? 'white' : 'transparent', fontWeight: '600'

          }}
        >
          <Text style={{
            color: activeTab === 'Monthly' ? '#141414' : '#888', fontWeight: '600'
          }}>Monthly</Text>

        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#555", "black"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: 80,
          width: "90%",
          marginTop: 20,
          marginLeft: 19,
          marginRight: 19,
          borderRadius: 10,
          justifyContent: "space-between",
        }}

      >
        {
          activeTab === 'Weekly' ? (
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>

              <View>
                <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>FOOD</Text>
                <Text style={{ color: "#aaa" }}>Lesser than last week</Text>
              </View>

              <View>
                <Text style={{ color: "#fff", fontWeight: "600" }}>$1000</Text>
              </View>

            </View>
          ) : null
        }

      </LinearGradient>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 14,
    gap: 10,
    borderBottomColor: "grey", borderBottomWidth: 0.2,

  },
  logo: {
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#fff"

  },
  logoText: {
    fontWeight: 800, fontSize: 18

  },
  brand: {
    color: '#fff', fontSize: 18, fontWeight: '700', flex: 1


  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',

  },
  badgeText: {
    color: '#fff', fontSize: 9, fontWeight: '700'
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,

  },
  fabText: {
    color: '#000',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 30

  }
})
