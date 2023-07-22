import axios from "axios";
import { twinitConfigs } from "../utilities/twinit.config";

const twinitAPi = 'https://sandbox-api.invicara.com';
const implictiUrl = `https://sandbox-api.invicara.com/passportsvc/api/v1/oauth/authorize?response_type=token&grant_type=implicit&redirect_uri=http://localhost:3000/accessKeygeneration&client_id=${twinitConfigs.appId}&scope=read write&client_authentication=`
export const generateAccessTokenForUnknownUser = async()=> {
    // const tokenRes = await axios.post(`https://${twinitConfigs.accessKey}:${twinitConfigs.seceretKey}@sandbox-api.invicara.com/passportsvc/api/v1/auth/token?appId=${twinitConfigs.appId}`);
    const tokenRes = await axios.post('https://ZQHGOJCLLSATKEAABWCDQWSOSJRQQMLL:CPmd61O3l51PP6iI5SBbaL9AnQhKInZkzSuuD6Qg4selqxx0AwQYEonhmZ0t5pel@sandbox-api.invicara.com/passportsvc/api/v1/auth/token?appId=03df473a-17d6-416a-8d84-42f8cd32239f&expires_in=100000');
    return tokenRes;
}

export const ImplicitLoginWithTwinitEnvironment = async()=> {

    const requireData = {
        authUrl: 'https://sandbox-api.invicara.com/passportsvc/api/v1/oauth/authorize',
        response_type: 'token',
        grant_type: 'Implicit',
        redirect_uri: 'http://localhost:3000/accessKeygeneration',
        client_id: '03df473a-17d6-416a-8d84-42f8cd32239f',
    }

    const implicitLogin = window.open(`${requireData.authUrl}?grant_type=implicit&client_id=${requireData.client_id}&response_type=${requireData.response_type}&redirect_uri=${requireData.redirect_uri}&scope=read write`);
    console.log(implicitLogin);
    return implicitLogin;
}