import { Tabs } from 'expo-router';
import { CalendarDays, House, Plus } from 'lucide-react-native';
import { Colors } from '../../../theme/colors';


export default function TabLayout() {
	

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.dark.text.primary,
				tabBarInactiveTintColor: Colors.dark.text.muted,
				tabBarStyle: {
					backgroundColor: Colors.dark.background.main,
					borderTopColor: Colors.dark.border.default,
				}	
			
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					tabBarStyle: { display: 'none' },
					title: 'Create Task',
					tabBarIcon: ({ color, size }) => (
						  <Plus color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
}
