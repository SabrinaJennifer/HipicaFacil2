import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './Pages/Dashboard';
import Agenda from './Pages/Agenda';
import Cavalos from './Pages/Cavalos';
import Clientes from './Pages/Clientes';
import Estoque from './Pages/Estoque';
import Estoque from './Pages/Financas';

import {Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5, Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent' 
            },
            activeTintColor : '',
            tabStyle:{
                paddingBottom: 5,
                paddingTop:5,
            }
        }}
        >
        <Tab.Screen
        name="Financas"
        component={Financas}
        options={{tabBarIcon: ({size, color})=>(<FontAwesome5 name="credit-card" size={size} color={color} />
        )
    }}   
        />
        <Tab.Screen 
        name= "Dashboard"
        component={Dashboard}
        options={{tabBarIcon: ({size, color})=>(<AntDesign name="piechart" size={size} color={color} />
        )
    }}   
        />
        <Tab.Screen 
        name= "Agenda" 
        component={Agenda}
        options={{tabBarIcon: ({size, color})=>(<MaterialCommunityIcons name="notebook" size={size} color={color}/>
        )
    }}
        />
        <Tab.Screen 
        name= "Cavalos" 
        component={Cavalos}
        options={{tabBarIcon: ({size, color})=>(<FontAwesome5 name="horse-head" size={size} color={color} />
        )
    }}
        />
        <Tab.Screen 
        name= "Clientes" 
        component={Clientes}
        options={{tabBarIcon: ({size, color})=>(<Ionicons name="person-add" size={size} color={color} />
        )
    }}

        />
        <Tab.Screen 
        name= "Estoque" 
        component={Estoque}
        options={{tabBarIcon: ({size, color})=>(<Entypo name="box" size={size} color={color} />
        )
    }}
        />

        </Tab.Navigator>
    )
}