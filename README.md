<p align="center">
  <a href="https://filipesoccol.github.io/react-ipfs-components-demo/" title="React IPFS Components">
    <img src="https://bafybeiatfi2bufcp7vsapownnqlsgzghvhhrzvfld2hlc55glogs5zie6q.ipfs.w3s.link/logo_ipfs_react.svg" alt="IPFS logo" width="244" />
  </a>
</p>

<h3 align="center">React IPFS Components</h3>

### Load any IPFS content from the fastest gateway available just passing a valid path.

React IPFS Components is a powerful library of React components that allows you to easily load any InterPlanetary File System (IPFS) content from the fastest gateway available. With this library, you no longer need to worry about configuring or setting up any gateways or passing a correct CID as a parameter. The plugin itself automatically verifies the fastest suitable gateways from the Public Gateways list provided by Protocol Labs.

Once you have successfully connected to at least three of these gateways, the content will show up automatically. The service to fetch images and JSON (metadata) files works by decoupling the URL/CID/Path passed and checking if it is a valid IPFS link. In case of a successful fetch for the CID and subpaths, it uses the best gateway possible to fetch content. If it successfully fetches from one of the best gateways, it returns immediately. Otherwise, it will fallback to the URL previously passed.

If the component fails to fetch data from the gateways multiple times, that source will be removed from the list and another one will take its place. This ensures that you always get the fastest and most reliable connection possible.

[Live Demo](https://filipesoccol.github.io/react-ipfs-components-demo/) / [Live Demo Repo](https://github.com/filipesoccol/react-ipfs-components-demo)

## Sources for media supported includes:

- [x] Path with CIDv0 only: Qm...
- [x] Path with CIDv1 only: bafy...
- [x] IPFS protocol path: ipfs://...
- [x] Pre-filled IPFS gateway path: https://ipfs.io/ipfs/...
- [x] CIDv1 with subdomain path: https://bafy.../2.png
- [x] Non IPFS URLs (Will fetch url itself.)

## Installation

First install package on your project:
```
npm install -s react-ipfs-components
```

Second initalize the fetcher on your main.jsx file:
```
import {IPFSFetcher} from 'react-ipfs-components'

IPFSFetcher.Initialize();
```

Then you can import components and use them on your jsx files:
```
import { IPFSAvatar, IPFSImage, IPFSVideo, IPFSFetcher } from 'react-ipfs-components'
```

## Usage

We feature two different components with preload:

**IPFSAvatar**: A component that has two different properties. 

- size: The size of the image in pixels.
- radius: The border radius of the image. 
```
<IPFSAvatar size="20" radius="20" src="path or cid"/>
<IPFSAvatar size="100" radius="0" src="path or cid"/>
```

**IPFSImage**: A component that has two different properties. 

- width: The width of the image in pixels.
- height: The height of the image in pixels. 
```
<IPFSImage width="20" height="20" src="path or cid"/>
<IPFSImage width="100" height="300" src="path or cid"/>
```

**IPFSVideo**: A video component with multiple options. 

- width: The width of the image in pixels.
- height: The height of the image in pixels.
- controls: Show navigation controls. 
- muted: Mute the video.
- loop: Restart video automatically once finished.
- autoplay: Play video automatically after loaded.
```
<IPFSVideo width="320" height="240" src="path or cid"/>
```

 Both the **IPFSImage**, **IPFSVideo** and **IPFSAvatar**  components extend a third component called **ipfs-media**. This component is responsible for communication with the component core, while the other two components handle how the object will be displayed. If you want to customize an implementation, you can extend **ipfs-media** the same way **ipfs-squared** and **ipfs-avatar** do with the desired modifications. This allows you to have full control over how the media is displayed while still benefiting from the underlying functionality provided by the React IPFS Components library.

## References:

- IPFS Public Fetcher Library - [Repo](https://github.com/filipesoccol/ipfs-public-fetcher)

- Protocol-Labs public gateway list: [Website](https://ipfs.github.io/public-gateway-checker/) / [Repo](https://github.com/ipfs/public-gateway-checker/blob/master/src/gateways.json)