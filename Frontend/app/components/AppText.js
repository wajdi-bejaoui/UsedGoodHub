import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles'

function AppText({children, style, ...otherProps}) {
    return (
        <Text 
            {...otherProps}
            style={[defaultStyles.text, style]}>
            {children}
        </Text>
    );
}


export default AppText;