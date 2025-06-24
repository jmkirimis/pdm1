export type RootStackParamList = {
    Home:undefined;
    Register:undefined;
    Settings:undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList{}
    }
}