import Svg, {Line, G, TSpan, Text, Path, Circle} from 'react-native-svg' 

export const MenuBares = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="24.449" viewBox="0 0 33.428 24.449">
            <G id="Menu_icon" data-name="Menu icon" transform="translate(-19 -62)">
                <Line id="Line_1" data-name="Line 1" x2="13.596" transform="translate(21.5 64.5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="5"/>
                <Line id="Line_2" data-name="Line 2" x2="22.248" transform="translate(21.5 74.225)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="5"/>
                <Line id="Line_3" data-name="Line 3" x2="28.428" transform="translate(21.5 83.949)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="5"/>
            </G>
        </Svg>

    )
}
export const HomeIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="25.244" height="23.428" viewBox="0 0 25.244 23.428">
            <Path id="Path_1" dataName="Path 1" d="M422.044,177.361v15.9a.529.529,0,0,1-.555.5h-6.8a.529.529,0,0,1-.555-.5v-8.69a1.355,1.355,0,0,0-1.422-1.275H406.13a1.355,1.355,0,0,0-1.422,1.275v8.69a.529.529,0,0,1-.555.5h-6.8a.529.529,0,0,1-.555-.5v-15.9a.49.49,0,0,1,.268-.426l12.067-6.527a.61.61,0,0,1,.573,0l12.067,6.527A.49.49,0,0,1,422.044,177.361Z" transform="translate(-396.8 -170.336)" fill={color}/>
        </Svg>


    )
}
export const HymnListIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="25.678" height="24.192" viewBox="0 0 25.678 24.192">
            <G id="Group_20" data-name="Group 20" transform="translate(-46 -503.077)">
                <Path id="Path_17" dataName="Path 17" d="M0,0H12.756" transform="translate(56.923 506.596)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="4"/>
                <Path id="Path_13" dataName="Path 13" d="M7.039,3.519A3.519,3.519,0,1,1,3.52,0,3.519,3.519,0,0,1,7.039,3.519" transform="translate(45.999 503.077)" fill={color}/>
                <Text id="_1" dataName="1" transform="translate(48.6 508)" fill="#fff" fontSize="4"  fontWeight="600"><TSpan x="0" y="0">1</TSpan></Text>
                <Path id="Path_16" dataName="Path 16" d="M0,0H12.756" transform="translate(56.923 515.173)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="4"/>
                <Path id="Path_14" dataName="Path 14" d="M7.039,34.04A3.519,3.519,0,1,1,3.52,30.521,3.519,3.519,0,0,1,7.039,34.04" transform="translate(45.999 481.133)" fill={color}/>
                <Text id="_2" dataName="2" transform="translate(48.235 516.577)" fill="#fff" fontSize="4"  fontWeight="600"><TSpan x="0" y="0">2</TSpan></Text>
                <Line id="Line_6" dataName="Line 6" x2="12.756" transform="translate(56.923 523.75)" fill="none" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4"/>
                <Path id="Path_15" dataName="Path 15" d="M7.039,64.562A3.519,3.519,0,1,1,3.52,61.043a3.519,3.519,0,0,1,3.519,3.519" transform="translate(45.999 459.188)" fill={color}/>
                <Text id="_3" dataName="3" transform="translate(48.235 525.154)" fill="#fff" fontSize="4"  fontWeight="600"><TSpan x="0" y="0">3</TSpan></Text>
            </G>
        </Svg>
    )
}
export const HymnListOutlineIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="25.678" height="24.192" viewBox="0 0 25.678 24.192">
            <G id="Group_20" data-name="Group 20" transform="translate(-46 -503.077)">
                <Path id="Path_17" dataName="Path 17" d="M0,0H12.756" transform="translate(56.923 506.596)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="4"/>
                {/* <Path id="Path_13" dataName="Path 13" d="M7.039,3.519A3.519,3.519,0,1,1,3.52,0,3.519,3.519,0,0,1,7.039,3.519" transform="translate(45.999 503.077)" fill={color}/> */}
                <Text id="_1" dataName="1" transform="translate(48.6 508)" fill="#055160" fontSize="7"  fontWeight="600"><TSpan x="0" y="0">1</TSpan></Text>
                <Path id="Path_16" dataName="Path 16" d="M0,0H12.756" transform="translate(56.923 515.173)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="4"/>
                {/* <Path id="Path_14" dataName="Path 14" d="M7.039,34.04A3.519,3.519,0,1,1,3.52,30.521,3.519,3.519,0,0,1,7.039,34.04" transform="translate(45.999 481.133)" fill={color}/> */}
                <Text id="_2" dataName="2" transform="translate(48.235 516.577)" fill="#055160" fontSize="7"  fontWeight="600"><TSpan x="0" y="0">2</TSpan></Text>
                <Line id="Line_6" dataName="Line 6" x2="12.756" transform="translate(56.923 523.75)" fill="none" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4"/>
                {/* <Path id="Path_15" dataName="Path 15" d="M7.039,64.562A3.519,3.519,0,1,1,3.52,61.043a3.519,3.519,0,0,1,3.519,3.519" transform="translate(45.999 459.188)" fill={color}/> */}
                <Text id="_3" dataName="3" transform="translate(48.235 525.154)" fill="#055160" fontSize="7"  fontWeight="600"><TSpan x="0" y="0">3</TSpan></Text>
            </G>
        </Svg>
    )
}
export const HomeOutline = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="27.244" height="25.442" viewBox="0 0 27.244 25.442">
            <Path id="Path_18" data-name="Path 18" d="M422.044,177.361v15.9a.529.529,0,0,1-.555.5h-6.8a.529.529,0,0,1-.555-.5v-8.69a1.355,1.355,0,0,0-1.422-1.275H406.13a1.355,1.355,0,0,0-1.422,1.275v8.69a.529.529,0,0,1-.555.5h-6.8a.529.529,0,0,1-.555-.5v-15.9a.49.49,0,0,1,.268-.426l12.067-6.527a.61.61,0,0,1,.573,0l12.067,6.527A.49.49,0,0,1,422.044,177.361Z" transform="translate(-395.8 -169.322)" fill="none" stroke={color} strokeWidth="2"/>
        </Svg>

    )
}
export const StarIcon = ({fillColor, strokeColor}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31.254 30.153">
            <Path id="Path_19" dataName="Path 19" d="M20.857,7.507l4.939.7a2.772,2.772,0,0,1,1.555,4.721l-3.558,3.5a2.771,2.771,0,0,0-.788,2.456l.863,4.912a2.772,2.772,0,0,1-4.01,2.938l-4.424-2.3a2.771,2.771,0,0,0-2.579.011L8.45,26.774a2.772,2.772,0,0,1-4.033-2.906l.823-4.919a2.772,2.772,0,0,0-.807-2.45L.848,13.032A2.772,2.772,0,0,1,2.365,8.3L7.3,7.561A2.773,2.773,0,0,0,9.379,6.036l2.189-4.481a2.772,2.772,0,0,1,4.971-.02L18.764,6a2.772,2.772,0,0,0,2.093,1.508" transform="translate(1.535 1.5)" fill={fillColor} stroke={strokeColor} strokeWidth="3"/>
        </Svg>


    )
}
export const MoonIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="13.441" height="20" viewBox="0 0 13.441 20">
            <Path id="Subtraction_1" dataName="Subtraction 1" d="M10.24,23a10.387,10.387,0,0,1-3.986-.786A10.222,10.222,0,0,1,3,20.071,9.957,9.957,0,0,1,.8,16.892a9.817,9.817,0,0,1,0-7.785A9.957,9.957,0,0,1,3,5.929,10.222,10.222,0,0,1,6.254,3.786,10.513,10.513,0,0,1,13.441,3.5a10.981,10.981,0,0,0,0,19A10.455,10.455,0,0,1,10.24,23Z" transform="translate(0 -3)" fill={color}/>
        </Svg>

      
    )
}
export const SunIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="26.651" height="26.657" viewBox="0 0 26.651 26.657">
            <G id="sun" transform="translate(-382.674 -63.172)">
                <Path id="Path_4" dataName="Path 4" d="M103.016,110.195a7.175,7.175,0,1,1,7.161-7.172,7.172,7.172,0,0,1-7.161,7.172m5.116-7.178A5.129,5.129,0,1,0,103,108.149a5.146,5.146,0,0,0,5.134-5.132" transform="translate(292.997 -26.52)" fill={color}/>
                <Path id="Path_5" dataName="Path 5" d="M57.057,307.99a1.09,1.09,0,0,1-1.032-.588.927.927,0,0,1,.134-1.1q.763-.819,1.582-1.584a1.017,1.017,0,0,1,1.433,1.434c-.508.546-1.039,1.073-1.586,1.58a1.791,1.791,0,0,1-.533.261" transform="translate(330.358 -221.747)" fill={color}/>
                <Path id="Path_6" dataName="Path 6" d="M305.581,304.379a2.565,2.565,0,0,1,.595.337c.5.452.963.937,1.43,1.42a1.023,1.023,0,1,1-1.452,1.441q-.733-.714-1.447-1.449a.96.96,0,0,1-.2-1.122,1.091,1.091,0,0,1,1.075-.627" transform="translate(97.809 -221.668)" fill={color}/>
                <Path id="Path_7" dataName="Path 7" d="M58.329,59.523a2.41,2.41,0,0,1-.575-.322c-.5-.461-.978-.952-1.453-1.442a1.022,1.022,0,1,1,1.444-1.447c.5.482.99.971,1.469,1.472a.956.956,0,0,1,.189,1.124,1.093,1.093,0,0,1-1.075.616" transform="translate(330.277 10.764)" fill={color}/>
                <Path id="Path_8" dataName="Path 8" d="M307.984,57.111a2.141,2.141,0,0,1-.3.569c-.475.518-.979,1.011-1.487,1.5a1.022,1.022,0,0,1-1.436-1.453q.722-.748,1.471-1.47a.959.959,0,0,1,1.122-.2,1.1,1.1,0,0,1,.628,1.055" transform="translate(97.758 10.807)" fill={color}/>
                <Path id="Path_9" dataName="Path 9" d="M193.656,2.076c0,.33,0,.661,0,.991a1.021,1.021,0,1,1-2.042.005q-.01-1.023,0-2.047a1.021,1.021,0,1,1,2.042-.005c.006.352,0,.7,0,1.055" transform="translate(203.367 63.172)" fill={color}/>
                <Path id="Path_10" dataName="Path 10" d="M2.047,193.692c-.341,0-.682,0-1.023,0a1.021,1.021,0,1,1,0-2.042q1.023-.01,2.047,0a1.021,1.021,0,1,1,0,2.042c-.341.006-.682,0-1.023,0" transform="translate(382.673 -116.169)" fill={color}/>
                <Path id="Path_11" dataName="Path 11" d="M353.418,191.659c.352,0,.7-.006,1.055,0a1.02,1.02,0,0,1,.017,2.04c-.714.011-1.428.012-2.142,0a1.02,1.02,0,0,1,.015-2.039c.351-.009.7,0,1.055,0" transform="translate(53.851 -116.181)" fill={color}/>
                <Path id="Path_12" dataName="Path 12" d="M193.656,353.493c0,.341,0,.682,0,1.023a1.021,1.021,0,1,1-2.042,0q-.009-1.023,0-2.047a1.021,1.021,0,1,1,2.042,0c.006.341,0,.682,0,1.023" transform="translate(203.366 -265.712)" fill={color}/>
            </G>
        </Svg>


      
    )
}
export const SearchIcon = ({color}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34.941 35.098">
            <G id="Search_button" dataName="Search button" transform="translate(-355.505 -47.276)">
                <Line id="Line_7" dataN-name="Line 7" x2="8.522" y2="8.418" transform="translate(378.388 70.421)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="4"/>
                <G id="Ellipse_1" dataN-name="Ellipse 1" transform="translate(355.505 47.276)" fill="none" stroke={color} strokeWidth="4">
                <Circle cx="13.5" cy="13.5" r="13.5" stroke="none"/>
                <Circle cx="13.5" cy="13.5" r="11" fill="none"/>
                </G>
            </G>
        </Svg>
      
    )
}




