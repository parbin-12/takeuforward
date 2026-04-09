import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <View style={{ flex: 1, backgroundColor: "#0d0d0d" }}>
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

      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>P</Text>
        </View>
        <Text style={styles.brand1}>Alex yu</Text>
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: '#2A2A2A', borderRadius: 30, padding: 4, marginLeft: 15, marginRight: 15 }}>

        <TouchableOpacity
          onPress={() => setActiveTab('preview')}
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: activeTab === 'preview' ? 'white' : 'transparent'
          }}
        >
          <Text style={{
            color: activeTab === 'preview' ? '#141414' : '#888',
            fontWeight: '600'
          }}>
            Preview
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('edit')}
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: activeTab === 'edit' ? 'white' : 'transparent'
          }}
        >
          <Text style={{
            color: activeTab === 'edit' ? '#141414' : '#888',
            fontWeight: '600'
          }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        {
          activeTab === 'preview' ? (
            <View style={{ marginTop: 10, gap: 19, marginLeft: 15 }}>
              <Text style={{ color: 'grey', fontSize: 15, fontWeight: "500" }}>Total spendings:<Text style={{ color: "white", fontWeight: "500" }}> $1000</Text></Text>
              <Text style={{ color: 'grey', fontSize: 15, fontWeight: "500" }}>Balance:<Text style={{ color: "white", fontWeight: "500" }}> $20000</Text> </Text>
              <Text style={{ color: 'grey', fontSize: 15, fontWeight: "500" }}>Email:<Text style={{ color: "white", fontWeight: "500" }}> alex@gmail.com</Text></Text>
            </View>
          ) :
            (
              (
                <View style={{ marginLeft: 15, marginRight: 15 }}>

                  <Text style={{ color: '#CCC', marginBottom: 5 }}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#666"

                  />

                  <Text style={{ color: '#CCC', marginBottom: 5, marginTop: 10 }}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"

                  />

                  <Text style={{ color: '#CCC', marginBottom: 5, marginTop: 10 }}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create a password"
                    placeholderTextColor="#666"

                  />

                  <Text style={{ color: '#CCC', marginBottom: 5, marginTop: 10 }}>Confirm Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor="#666"

                  />

                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      padding: 14,
                      borderRadius: 10,
                      marginTop: 20,
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{ color: '#141414', fontWeight: '700' }}>
                      Update Details
                    </Text>
                  </TouchableOpacity>

                </View>
              )
            )
        }
      </View>
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
    borderBottomColor: "grey", borderBottomWidth: 0.5,

  },
  logo: {
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#fff"
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
  badgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  logoText: { fontWeight: 800, fontSize: 18 },

  header: {
    marginTop: -20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 14,
    gap: 10,
    borderBottomColor: "grey"
  },
  brand1: {
    color: "#fff", fontSize: 17, flex: 1, fontWeight: "600"

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
  },
  input: {
    backgroundColor: "#2A2A2A",
    borderRadius: 7,
    fontWeight: 500,
    color: "orange",
    height: 45
  },



});