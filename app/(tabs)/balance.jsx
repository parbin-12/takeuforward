import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PayUDashboard() {
  const bars = [0.55, 0.18, 0.95, 0.28, 0.65, 0.75, 0.50];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
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
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Your Balances</Text>
        <Text style={styles.subheading}>Manage your multi-currency accounts</Text>

        <View style={styles.gaugeBox}>
          <View style={styles.gaugeArc}>
            <View style={[styles.arcSegment, { backgroundColor: '#2DD4A0', flex: 3 }]} />
            <View style={[styles.arcSegment, { backgroundColor: '#E879A8', flex: 2 }]} />
            <View style={[styles.arcSegment, { backgroundColor: '#6BAED6', flex: 1.5 }]} />
            <View style={[styles.arcSegment, { backgroundColor: '#F5C842', flex: 1 }]} />
          </View>
          <Text style={styles.scoreNumber}>660</Text>
          <Text style={styles.scoreLabel}>Your Credit Score is average</Text>
          <Text style={styles.scoreDate}>Last Check on 21 Apr</Text>
        </View>

        <Text style={styles.sectionTitle}>Available Currencies</Text>
        <View style={styles.currencyCard}>
          <Text style={styles.flag}>🇨🇦</Text>
          <View style={styles.currencyInfo}>
            <Text style={styles.currencyCode}>CAD</Text>
            <Text style={styles.currencyName}>Canadian Dollar</Text>
          </View>
          <Text style={styles.star}>☆</Text>
          <TouchableOpacity style={styles.enableBtn}>
            <Text style={styles.enableText}>+ Enable</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chart}>
          <View style={styles.chartBars}>
            {bars.map((h, i) => (
              <View key={i} style={styles.barWrapper}>
                <View
                  style={[
                    styles.bar,
                    { height: h * 120, backgroundColor: i % 2 === 0 ? '#6BAED6' : '#2DD4A0' },
                  ]}
                />
              </View>
            ))}
          </View>
          <View style={styles.chartFooter}>
            <Text style={styles.chartLabel}>Current margin: April Spendings</Text>
            <Text style={styles.chartValues}>
              <Text style={{ color: '#7B61FF' }}>$350.00</Text>
              <Text style={{ color: '#555' }}> / </Text>
              <Text style={{ color: '#7B61FF' }}>$640.00</Text>
            </Text>
          </View>
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 14,
    gap: 10,
    borderBottomColor:"grey",borderBottomWidth:0.5
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: { color: '#000', fontWeight: '800', fontSize: 18 },
  brand: { color: '#fff', fontSize: 18, fontWeight: '700', flex: 1 },
  navIcon: { fontSize: 18 },
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

  content: { paddingHorizontal: 20, paddingBottom: 100 },
  heading: { color: '#fff', fontSize: 20, fontWeight: '500', marginTop: 16 },
  subheading: { color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 4 },

  gaugeBox: { alignItems: 'center', marginVertical: 28 },
  gaugeArc: {
    width: 260,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1C1C1C',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 3,
    marginBottom: 16,
  },
  arcSegment: { height: 14, borderRadius: 7 },
  scoreNumber: { color: '#fff', fontSize: 52, fontWeight: '700', letterSpacing: -2 },
  scoreLabel: { color: '#fff', fontSize: 15, fontWeight: '600', marginTop: 4 },
  scoreDate: { color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 2 },

  sectionTitle: { color: '#fff', fontSize: 17, fontWeight: '600', marginBottom: 12 },
  currencyCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  flag: { fontSize: 28 },
  currencyInfo: { flex: 1 },
  currencyCode: { color: '#fff', fontSize: 16, fontWeight: '600' },
  currencyName: { color: 'rgba(255,255,255,0.45)', fontSize: 13 },
  star: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 20
  },
  enableBtn: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  enableText: { color: '#fff', fontSize: 13, fontWeight: '600' },

  chart: { marginTop: 24 },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 140,
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bar: {
    width: '100%',
    borderRadius: 5
  },
  chartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  chartLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 12 },
  chartValues:
  {
    fontSize: 13,
    fontWeight: '600'
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
  fabText:
  {
    color: '#000',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 30
  },
});