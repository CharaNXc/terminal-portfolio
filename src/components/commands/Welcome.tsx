import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

_______________________________________________________________________________________________________________________________
      __     _     _   __     ____     __     _     _        __     __       __      __     _     _     __     _     _   _____ 
    /    )   /    /    / |    /    )   / |    /|   /       /    )   / |      /       / |    /|   /    /    )   /    /    /    '
---/--------/___ /----/__|---/___ /---/__|---/-| -/--------\-------/__|-----/-------/__|---/-| -/----/--------/___ /----/__----
  /        /    /    /   |  /    |   /   |  /  | /          \     /   |    /       /   |  /  | /    /        /    /    /       
_(____/___/____/____/____|_/_____|__/____|_/___|/_______(____/___/____|_ _/_ _____/____|_/___|/____(____/___/____/____/____ ___
                                                                                                                               
                                                                                                                               

          `}
        <PreWrapper>
          <PreNameMobile>
            {`
   
      ___           ___           ___           ___           ___           ___           __            ___     
     /  /\         /  /\         /  /\         /  /\         /  /\         /  /\         |  |\         /  /\    
    /  /::\       /  /:/        /  /::\       /  /::\       /  /::\       /  /::|        |  |:|       /  /::\   
   /  /:/\:\     /  /:/        /  /:/\:\     /  /:/\:\     /  /:/\:\     /  /:|:|        |  |:|      /  /:/\:\  
  /  /:/  \:\   /  /::\ ___   /  /::\ \:\   /  /::\ \:\   /  /::\ \:\   /  /:/|:|__      |__|:|__   /  /:/  \:\ 
 /__/:/ \  \:\ /__/:/\:\  /\ /__/:/\:\_\:\ /__/:/\:\_\:\ /__/:/\:\_\:\ /__/:/ |:| /\ ____/__/::::\ /__/:/ \  \:\
 \  \:\  \__\/ \__\/  \:\/:/ \__\/  \:\/:/ \__\/~|::\/:/ \__\/  \:\/:/ \__\/  |:|/:/ \__\::::/~~~~ \  \:\  \__\/
  \  \:\            \__\::/       \__\::/     |  |:|::/       \__\::/      |  |:/:/     |~~|:|      \  \:\      
   \  \:\           /  /:/        /  /:/      |  |:|\/        /  /:/       |__|::/      |  |:|       \  \:\     
    \  \:\         /__/:/        /__/:/       |__|:|~        /__/:/        /__/:/       |__|:|        \  \:\    
     \__\/         \__\/         \__\/         \__\|         \__\/         \__\/         \__\|         \__\/    

 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
