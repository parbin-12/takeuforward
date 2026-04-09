import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown:false,
            tabBarStyle:{backgroundColor:"black" ,borderTopColor:"black"},
            tabBarActiveTintColor:"white"
        }}>
            <Tabs.Screen name="home"
             options={{
                
                title:"Home",
                
                tabBarIcon:({color,size,focused})=>(
                    <Ionicons
                    name={focused?"home":"home-outline"}
                    size={size}
                    color={focused ? "white" :"grey"}
                    />
                ),
            }} />
            <Tabs.Screen name="balance" 
            options={{
                title:"Balance",
                tabBarIcon:({color,size,focused})=>(
                    <Ionicons 
                    name={focused ? "wallet" :"wallet-outline"}
                    size={size}
                    color={focused ? "white" :"grey"}
                    />
                ),
            }}
            
            
            />
            <Tabs.Screen name="profile" 
            options={{
                title:"Profile",
                tabBarIcon:({color,size,focused})=>(
                    <Ionicons 
                    name={focused ? "person" :"person-outline"}
                    size={size}
                    color={focused ? "white" :"grey"}
                    />
                ),
                
                }} />
        </Tabs>
    );
}