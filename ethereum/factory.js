import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE069c47408d43A97278eD0934b2E220d004F19FF'
);

export default instance;


