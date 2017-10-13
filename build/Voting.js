var compiledContractDefinition = {"contracts": {"ECCMath": {"bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820e65e1743580f257748f7752490ecbe30223b605cf437e34d6e6b40e63fed644a0029", "abi": []}, "owned": {"bin": "0x6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b61015c8061003c6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610048578063f2fde38b14610084575b600080fd5b341561005357600080fd5b61005b6100b2565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561008f57600080fd5b6100b073ffffffffffffffffffffffffffffffffffffffff600435166100ce565b005b60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000543373ffffffffffffffffffffffffffffffffffffffff9081169116146100f657600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff83161790555b5b505600a165627a7a72305820a017b29c518fbf76ff2f038c4825b05a4861309e6f336903c8c130cf80f11d8b0029", "abi": [{"inputs": [], "constant": true, "name": "owner", "outputs": [{"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "newOwner"}], "constant": false, "name": "transferOwnership", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}]}, "Secp256k1": {"bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820d5d4dce6fed0e0ce9606149cfe644074a07d9339f6163ac4806bb2cf038ba87f0029", "abi": []}, "Voting": {"bin": "0x6060604052600a600755341561001457600080fd5b5b5b60008054600160a060020a03191633600160a060020a03161790555b60008054819060a060020a60ff02191674010000000000000000000000000000000000000000825b02179055506000600c555b5b612902806100756000396000f300606060405236156101885763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663133db7ec811461018d5780631e85f051146102b05780631ea736e0146102da5780632019a608146102ff5780632ae6f97d146103245780632efbad271461034f5780633683af171461039e5780633c26afc914610426578063562cd5b41461044b57806368e469c2146104735780637d8db478146104d45780638923862f146104f95780638da5cb5b1461051e5780638dec6ece1461054d5780639af5c09d14610572578063b21a64da14610597578063b3135039146105be578063bf89e5ee146106d8578063c19d93fb14610728578063c75353911461075f578063c7dba7a914610787578063c89b006a146107af578063cb8507da14610859578063cbc46fcd14610881578063cd2b8695146108a6578063d1733b4d146108cb578063dff7d2c7146109e5578063e29c2afa14610a0a578063f2fde38b14610a32578063fba00cbd14610a53578063fde315bd14610a7e575b600080fd5b341561019857600080fd5b61029e600460248135818101908301358060208181020160405190810160405280939291908181526020018383602002808284378201915050505050509190806040019060028060200260405190810160405280929190826002602002808284375093959460208082019550903586018082019450359250829150601f820181900481020160405190810160405281815292919060208401838380828437820191505050505050919080604001906002806020026040519081016040528092919082600260200280828437820191505050505091908060400190600280602002604051908101604052809291908260026020028082843750939550610aa6945050505050565b60405190815260200160405180910390f35b34156102bb57600080fd5b6102c6600435610ac1565b604051901515815260200160405180910390f35b34156102e557600080fd5b61029e610ad6565b60405190815260200160405180910390f35b341561030a57600080fd5b61029e610adc565b60405190815260200160405180910390f35b341561032f57600080fd5b61029e600435602435610ae2565b60405190815260200160405180910390f35b341561035a57600080fd5b610365600435610b14565b6040518082606080838360005b8381101561038b5780820151818401525b602001610372565b5050505090500191505060405180910390f35b34156103a957600080fd5b6103ed6004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610b2d95505050505050565b6040518082604080838360005b8381101561038b5780820151818401525b602001610372565b5050505090500191505060405180910390f35b341561043157600080fd5b61029e610b46565b60405190815260200160405180910390f35b341561045657600080fd5b61029e600435610b4c565b60405190815260200160405180910390f35b341561047e57600080fd5b61029e6004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610b5e95505050505050565b60405190815260200160405180910390f35b34156104df57600080fd5b61029e610b71565b60405190815260200160405180910390f35b341561050457600080fd5b61029e610b78565b60405190815260200160405180910390f35b341561052957600080fd5b610531610b7e565b604051600160a060020a03909116815260200160405180910390f35b341561055857600080fd5b61029e610b8d565b60405190815260200160405180910390f35b341561057d57600080fd5b61029e610b93565b60405190815260200160405180910390f35b34156105a257600080fd5b6102c6610b99565b604051901515815260200160405180910390f35b34156105c957600080fd5b6102c660046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001909190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908060400190600280602002604051908101604052809291908260026020028082843750939550610c26945050505050565b604051901515815260200160405180910390f35b34156106e357600080fd5b6102c66004604481600260408051908101604052809291908260026020028082843750939550610ca1945050505050565b604051901515815260200160405180910390f35b341561073357600080fd5b61073b611003565b6040518082600481111561074b57fe5b60ff16815260200191505060405180910390f35b341561076a57600080fd5b61029e600435611013565b60405190815260200160405180910390f35b341561079257600080fd5b61029e600435611025565b60405190815260200160405180910390f35b34156107ba57600080fd5b6102c66004803590602480359160443591606435916084359160a435919060e49060c4359081019083013580602081810201604051908101604052809392919081815260200183836020028082843782019150505050505091908060400190600280602002604051908101604052809291908260026020028082843750939550611048945050505050565b604051901515815260200160405180910390f35b341561086457600080fd5b61029e600435611181565b60405190815260200160405180910390f35b341561088c57600080fd5b61029e6111a4565b60405190815260200160405180910390f35b34156108b157600080fd5b61029e6111aa565b60405190815260200160405180910390f35b34156108d657600080fd5b6102c660046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080604001906002806020026040519081016040528092919082600260200280828437509395506111b0945050505050565b604051901515815260200160405180910390f35b34156109f057600080fd5b61029e6111cb565b60405190815260200160405180910390f35b3415610a1557600080fd5b61029e6004356111d1565b60405190815260200160405180910390f35b3415610a3d57600080fd5b610a51600160a060020a03600435166111e9565b005b3415610a5e57600080fd5b61029e600435602435611231565b60405190815260200160405180910390f35b3415610a8957600080fd5b61029e600435611269565b60405190815260200160405180910390f35b6000610ab5868686868661128c565b90505b95945050505050565b60106020526000908152604090205460ff1681565b60065481565b60055481565b600d60205281600052604060002081815481101515610afd57fe5b906000526020600020900160005b91509150505481565b610b1c612693565b610b25826113b2565b90505b919050565b610b356126ba565b610b2582611439565b90505b919050565b60015481565b600f6020526000908152604090205481565b6000610b2582611487565b90505b919050565b600e545b90565b6101f481565b600054600160a060020a031681565b60045481565b60025481565b60006002805b60005460a060020a900460ff166004811115610bb757fe5b14610bc157600080fd5b60005433600160a060020a03908116911614610bdc57600080fd5b600354421015610bef5760009150610c20565b600080546002919074ff0000000000000000000000000000000000000000191660a060020a835b0217905550600191505b5b5b5090565b600060126000836040518082604080838360005b83811015610c535780820151818401525b602001610c3a565b5050505090500191505060405190819003902081526020810191909152604001600020541515610c8557506000610ab8565b610c9286868686866114d3565b505b5060005b95945050505050565b600080806001805b60005460a060020a900460ff166004811115610cc157fe5b14610ccb57600080fd5b60005433600160a060020a03908116911614610ce657600080fd5b600354421115610cf95760009350610ff9565b610d02856116f8565b1515610d115760009350610ff9565b60106000866040518082604080838360005b83811015610d3c5780820151818401525b602001610d23565b50505050905001915050604051908190039020815260208101919091526040016000205460ff1615610d715760009350610ff9565b600154600c546000908152600d60205260409020546002905b041415610e1a57610dfd600d6000600c548152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610df357602002820191906000526020600020905b815481526020019060010190808311610ddf575b5050505050611487565b600c80546000838152600f60205260409020819055600101905592505b600c546000908152600d60205260409020805460018101610e3b83826126e0565b916000526020600020900160005b8760005b60200201519091555050600c546000908152600d60205260409020805460018101610e7883826126e0565b916000526020600020900160005b8760015b60200201519091555050600e805460018101610ea6838261270a565b916000526020600020906002020160005b60408051908101604052808960005b602002015181526020018960015b60200201519052610ee8929150600261273c565b5050600160106000876040518082604080838360005b83811015610f175780820151818401525b602001610efe565b50505050905001915050604051908190039020815260208082019290925260409081016000908120805460ff191694151594909417909355600154600c548452600d909252909120546002905b041415610ff457610fd7600d6000600c548152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610df357602002820191906000526020600020905b815481526020019060010190808311610ddf575b5050505050611487565b600c80546000838152600f60205260409020819055600101905591505b600193505b5b5b505050919050565b60005460a060020a900460ff1681565b60126020526000908152604090205481565b600980548290811061103357fe5b906000526020600020900160005b5054905081565b600080805b60005460a060020a900460ff16600481111561106557fe5b1461106f57600080fd5b60005433600160a060020a0390811691161461108a57600080fd5b6101f48a111561109d5760009150611172565b428910156110ae5760009150611172565b876007548a0111156110c35760009150611172565b858811806110d2575085878901115b806110e05750846007548701115b156110ee5760009150611172565b6110f7836116f8565b15156111065760009150611172565b60018a90556002899055600388905560058690556006859055600884805161113292916020019061277b565b50611140600a84600261273c565b50600080546001919074ff0000000000000000000000000000000000000000191660a060020a835b0217905550600191505b5b5b5098975050505050505050565b600880548290811061103357fe5b906000526020600020900160005b5054905081565b60075481565b600c5481565b6000610ab586868686866114d3565b90505b95945050505050565b60035481565b600a81600281106111de57fe5b0160005b5054905081565b60005433600160a060020a0390811691161461120457600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600e80548390811061123f57fe5b906000526020600020906002020160005b50816002811061125c57fe5b0160005b91509150505481565b601180548290811061103357fe5b906000526020600020900160005b5054905081565b6000858585858560405180868051906020019060200280838360005b838110156112c15780820151818401525b6020016112a8565b5050505090500185600260200280838360005b838110156112ed5780820151818401525b6020016112d4565b5050505090500184805190602001908083835b6020831061132057805182525b601f199092019160209182019101611300565b6001836020036101000a038019825116818451161790925250505091909101905083604080838360005b838110156113635780820151818401525b60200161134a565b5050505090500182600260200280838360005b8381101561138f5780820151818401525b602001611376565b505050509050019550505050505060405190819003902090505b95945050505050565b6113ba612693565b6113c26126ba565b7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817988160005b60200201527f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88160015b6020020152611420838261170b565b9150611432826401000003d019611c01565b5b50919050565b6114416126ba565b611449612693565b61145a61145584611487565b6113b2565b90508060005b60200201518260005b60200201528060015b60200201518260015b60200201525b50919050565b60008160405180828051906020019060200280838360005b838110156114b85780820151818401525b60200161149f565b5050505090500191505060405190819003902090505b919050565b60006114dd6126ba565b6114e56127c7565b6114ed6126ba565b60006114f76126ba565b6114ff6126ba565b6115076126ba565b7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817988760005b60200201527f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88760015b602002015260028c5181151561156857fe5b046040518059106115765750595b908082528060200260200182016040525b5095508a8660008151811061159857fe5b602090810290910101526115ab8c611439565b9450600093505b60028c518115156115bf57fe5b048410156116e3578b84600202815181106115d657fe5b906020019060200201518360005b60200201528b60016002860201815181106115fb57fe5b906020019060200201518360015b60200201526116448a858151811061161d57fe5b906020019060200201518888878151811061163457fe5b9060200190602002015186611c5d565b915061167c8a858151811061165557fe5b906020019060200201518688878151811061166c57fe5b906020019060200201518c611c5d565b9050600160028d5181151561168d57fe5b04038410156116c1576116a38c8a8f858561128c565b8685600101815181106116b257fe5b602090810290910101526116d7565b6116ce8c8a8f858561128c565b8b1497506116e8565b5b6001909301926115b2565b600097505b5050505050505095945050505050565b6000610b2582611cd5565b90505b919050565b611713612693565b60008060006117206127d9565b611728612693565b611730612807565b6401000003d0199550600080808b151561174957611bf1565b6000604051985061020089016040525b8c156117915760018d1615611780575060208c06808989015360206010821102818e03019c505b60028d049c50600188019750611759565b506060604051908101604052808c60005b602002015181526020018c60015b6020020151815260016020909101528660005b60200201526117d98660005b6020020151611d75565b94506117e5858c611e2b565b8660015b6020020152611800858760015b6020020151612070565b8660025b602002015261181f858760026117f6565b6020020151612070565b8660035b602002015261183e858760036117f6565b6020020151612070565b8660045b602002015261185d858760046117f6565b6020020151612070565b8660055b602002015261187c858760056117f6565b6020020151612070565b8660065b602002015261189b858760066117f6565b6020020151612070565b8660075b60200201528560015b602002015160025b60200201518460005b6020020152888460005b60200201518760025b602002015160025b6020020151098460015b6020020152888460015b60200201518760035b602002015160025b6020020151098460025b6020020152888460025b60200201518760045b602002015160025b6020020151098460035b6020020152888460035b60200201518760055b602002015160025b6020020151098460045b6020020152888460045b60200201518760065b602002015160025b6020020151098460055b6020020152888460055b60200201518760075b602002015160025b6020020151098460065b60200201526119ae8460065b60200201518a6122c9565b8460075b60200201528360075b60200201518460085b6020020152888460085b60200201518560055b60200201510984600f5b6020020152600692505b60028310611a6457888460085b6020020151876001860160088110611a0c57fe5b602002015160025b6020020151098460085b6020020152888460085b602002015185600119860160108110611a3d57fe5b602002015109846008850160108110611a5257fe5b60200201525b600019909201916119eb565b888460085b60200201518760025b602002015160025b6020020151098460095b6020020152600092505b6007831015611afe57611af2866001850160088110611aa957fe5b6020020151856009860160108110611abd57fe5b60200201518b876009880160108110611ad257fe5b6020020151886009890160108110611ae657fe5b6020020151098c612361565b5b600190920191611a8e565b5b6000871115611bf157600019808801978901015160001a9150611b218a6123ac565b6010821115611b89576002601f8390035b049050611b848a6040805190810160405280898560088110611b5057fe5b602002015160005b60200201518152602001898560088110611b6e57fe5b602002015160015b60200201518d039052612458565b611bea565b6000821115611bea57600260001983015b049050611bea8a6040805190810160405280898560088110611bb857fe5b602002015160005b60200201518152602001898560088110611bd657fe5b602002015160015b60200201519052612458565b5b5b611afe565b5b50505050505050505092915050565b600080611c168460025b6020020151846122c9565b915082828309905082818560005b6020020151098460005b602002015282808284098560015b6020020151098460015b602002015260018460025b60200201525b50505050565b611c656126ba565b611c6d612693565b611c756126ba565b611c91611c82888861170b565b611c8c878761170b565b612070565b9150611ca3826401000003d019611c01565b8160005b60200201518160005b60200201528160015b60200201518160015b60200201529150815b5050949350505050565b60006401000003d019818084815b60200201511580611cfb5750828560005b6020020151145b80611d0c57508460015b6020020151155b80611d1e5750828560015b6020020151145b15611d2c5760009350610ff9565b828560015b60200201518660015b6020020151099150826007818760005b6020020151868960005b60200201518a60005b6020020151090908905080821493505b505050919050565b611d7d612693565b6401000003d019600080808080808860025b60200201511515611d9f57611e1f565b8860005b602002015195508860015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808a60025b602002015187096002098860025b60200201525b50505050505050919050565b611e33612693565b6000611e3d6126ba565b611e4561282f565b6000808080808a60025b60200201511515611e8e576060604051908101604052808b60005b602002015181526020018b60015b6020020151815260200160018152509850612062565b8960015b60200201511515611ea5578a9850612062565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b60200201526080604051908101604052808c60005b602002015181526020018c60015b60200201518152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b60200201511415611fa4578560035b60200201518660015b602002015114611f955760008b815b602002015260008b60015b602002015260008b60025b6020020152612062565b611f9e8b611d75565b50612062565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b6020020152878b60025b602002015186098960025b60200201525b505050505050505092915050565b612078612693565b600061208261282f565b61208a61282f565b6000808080808a60025b602002015115156120a757899850612062565b8960025b602002015115156120be578a9850612062565b6401000003d0199750878b60025b60200201518c60025b6020020151098760005b6020020152878760005b60200201518c60025b6020020151098760015b6020020152878a60025b60200201518b60025b6020020151098760025b6020020152878760025b60200201518b60025b6020020151098760035b6020020152608060405190810160405280898960025b60200201518e60005b6020020151098152602001898960035b60200201518e60015b6020020151098152602001898960005b60200201518d60005b6020020151098152602001898960015b60200201518d60015b602002015109905295508560025b60200201518660005b602002015114156121ee578560035b60200201518660015b6020020151146121de57612062565b6121e78b611d75565b9850612062565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808960005b6020020152878082810381868a60005b6020020151090885098960015b60200201528780838860015b60200201510989038a60015b6020020151088960015b602002015287808b60025b60200201518d60025b602002015109860989600261205c565b60200201525b505050505050505092915050565b600080808080808715806122dc57508688145b806122e5575086155b156122ef57600080fd5b8688111561230657868881151561230257fe5b0697505b600193508692508791505b811561233c57818381151561232257fe5b949594048581029094039391928383029003919050612311565b6000851215612352578460000387039550612356565b8495505b505050505092915050565b80828560005b6020020151098460005b60200201528080838509856001611c3c565b602002015109846001611c46565b60200201526001846002611c51565b60200201525b50505050565b6401000003d019600080808080808760025b602002015115156123ce5761244e565b8760005b602002015195508760015b6020020151945086858609935086878588096004099250868787880960030991508687848508880388848509089050808860005b602002015286808086800960080988038889848b0387088509088860015b602002015286808960025b602002015187096002098860025b60200201525b5050505050505050565b60006124626126ba565b61246a61282f565b6000808080808960015b602002015115156124b3578860005b60200201518a60005b60200201528860015b60200201518a60015b602002015260018a60025b6020020152612687565b8860015b602002015115156124c757612687565b6401000003d0199750878a60025b60200201518b60025b6020020151098760005b6020020152878760005b60200201518b60025b6020020151098760015b60200201526080604051908101604052808b60005b602002015181526020018b60015b60200201518152602001898960005b60200201518c60005b6020020151098152602001898960015b60200201518c60015b602002015109905295508560025b60200201518660005b602002015114156125c9578560035b60200201518660015b6020020151146125bb5760008a815b602002015260008a60015b602002015260008a60026124a9565b6020020152612687565b6125c48a6123ac565b612687565b5b878660005b602002015189038760025b6020020151089450878660015b602002015189038760035b60200201510893508785860992508785840991508782890389868709089050878080858960005b602002015109600209890382089050808a60005b6020020152878082810381868a60005b6020020151090885098a60015b60200201528780838860015b60200201510989038b60015b6020020151088a60015b6020020152878a60025b602002015186098a60025b60200201525b50505050505050505050565b60606040519081016040526003815b60008152602001906001900390816126a25790505090565b604080519081016040526002815b60008152602001906001900390816126a25790505090565b81548183558181151161270457600083815260209020612704918101908301612856565b5b505050565b815481835581811511612704576002028160020283600052602060002091820191016127049190612877565b5b505050565b826002810192821561276a579160200282015b8281111561276a57825182559160200191906001019061274f565b5b50610c20929150612856565b5090565b82805482825590600052602060002090810192821561276a579160200282015b8281111561276a57825182559160200191906001019061274f565b5b50610c20929150612856565b5090565b60206040519081016040526000815290565b6103006040519081016040526008815b6127f1612693565b8152602001906001900390816127e95790505090565b6102006040519081016040526010815b60008152602001906001900390816126a25790505090565b60806040519081016040526004815b60008152602001906001900390816126a25790505090565b610b7591905b80821115610c20576000815560010161285c565b5090565b90565b610b7591905b80821115610c2057600061289182826128c8565b5060020161287d565b5090565b90565b60606040519081016040526003815b60008152602001906001900390816126a25790505090565b5060008155600101600090555600a165627a7a7230582032d43d14beb219d690041bac8be730a8e38cb0589cb6d8111f47abcfa9bcc3f70029", "abi": [{"inputs": [{"type": "uint256[]", "name": "y"}, {"type": "uint256[2]", "name": "link"}, {"type": "string", "name": "message"}, {"type": "uint256[2]", "name": "z_1"}, {"type": "uint256[2]", "name": "z_2"}], "constant": true, "name": "h1", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bytes32", "name": ""}], "constant": true, "name": "registeredKeys", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "votingEndTime", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "votingStartTime", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "ring", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": "r"}], "constant": true, "name": "mapToCurve", "outputs": [{"type": "uint256[3]", "name": "rG"}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256[]", "name": "y"}], "constant": true, "name": "h2", "outputs": [{"type": "uint256[2]", "name": "Q"}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "numVoterPerRing", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "hashRingToIdx", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256[]", "name": "y"}], "constant": true, "name": "hashToInt", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "getNumRegisterVoters", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "maxNumberVotersPerRing", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "owner", "outputs": [{"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "registrationVotingGap", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "registrationStartTime", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": false, "name": "endRegistrationPhase", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "encryptedVote"}, {"type": "uint256[]", "name": "pubKeys"}, {"type": "uint256", "name": "c_0"}, {"type": "uint256[]", "name": "signature"}, {"type": "uint256[2]", "name": "link"}], "constant": false, "name": "castVote", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256[2]", "name": "publicKey"}], "constant": false, "name": "registerVoter", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "state", "outputs": [{"type": "uint8", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bytes32", "name": ""}], "constant": true, "name": "registeredVoteLink", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "secretShare", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": "_numVoterPerRing"}, {"type": "uint256", "name": "_registrationStartTime"}, {"type": "uint256", "name": "_registrationEndTime"}, {"type": "uint256", "name": "_registrationVotingGap"}, {"type": "uint256", "name": "_votingStartTime"}, {"type": "uint256", "name": "_votingEndTime"}, {"type": "uint256[]", "name": "_secretShareVerifyPublicParams"}, {"type": "uint256[2]", "name": "_thresholdKey"}], "constant": false, "name": "finishSetUp", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "secretShareVerifyPublicParams", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "minimumPhaseTime", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "currentRingIdx", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "message"}, {"type": "uint256[]", "name": "y"}, {"type": "uint256", "name": "c_0"}, {"type": "uint256[]", "name": "s"}, {"type": "uint256[2]", "name": "link"}], "constant": true, "name": "verifyRingSignature", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "registrationEndTime", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "thresholdKey", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "newOwner"}], "constant": false, "name": "transferOwnership", "outputs": [], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "voters", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "encryptedVotes", "outputs": [{"type": "bytes32", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "type": "constructor", "payable": false}]}, "LinkableRingSignature": {"bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a723058208f2d94d563d5a763b72c8894482ec2397cc196e9ec0e4720958feda2e5dcb6220029", "abi": []}}, "version": "0.4.14+commit.c2215d46.Darwin.appleclang"};