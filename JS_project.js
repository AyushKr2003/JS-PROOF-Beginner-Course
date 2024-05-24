const nft = [];


function mintNFT (_name, eye_color, shirt_type, _bling) {
    const nftObj = {
        "name" : _name,
        "eyeColor" : eye_color,
        "shirtType" : shirt_type,
        "bling" : _bling
    }

    nft.push(nftObj);
    console.log("Minted : " + _name);
}


function listNFTs () {
    console.log("Metadata of NFT's");
    for( i in nft){
        console.log(nft[i]);
    }

}


function getTotalSupply() {
    console.log("Total NFT's are "+ nft.length);

}


mintNFT("John","Black","sleeveless", "watch");
mintNFT("Rohan","Gray","Over Size", "chain");
mintNFT("Smith","Blue","T shirt", "ring");

listNFTs();

getTotalSupply();
