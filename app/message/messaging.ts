import { Web5 } from '@tbd54566975/web5';

const connectWeb5 = async () => {
  const { web5, did: myDid } = await Web5.connect();
};

connectWeb5();


interface TextOnlyMessage {
    sender: did;
    recipient: did;
    content: string;
}