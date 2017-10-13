
var c_0 = new BigNumber("46356590528205705682874833994594019563175041777587384862260606515497681242531");
var s = [new BigNumber("30408272498485478504052040239686289793989654563198514274816150469663370423748"),new BigNumber("83192675622886868677627145431964734416725282542183655841012486022427271485258"),new BigNumber("72118182089230498366389534707367677801755905885929007538646732066497713904839"),new BigNumber("83457633446002518389117152030967814158105180794589759321061672843623003448426")];
var Y = [new BigNumber("775245984437858550845580695032082611650303517420713496137034157622935896757"), new BigNumber("33516673377556520219800894500173396248174022046311058992828755295033560372312")];
var message = "Every move we made was a kiss";
var pub_keys = [new BigNumber("77037729424130683256210036577725760547738042331800318243973047839826631344793"), new BigNumber("39303961035378017880337524127283910846022939183992305227965983418133521850619"),new BigNumber("72312052639588646271206961474032464528091941509486141835560818854432704854223"), new BigNumber("76062356881383663629056626348890729740375107951689578329508494127306801523507"),new BigNumber("37692914100317737812735356148078765084258530468835222755475182581983977595404"), new BigNumber("63031502027468323206407699979730776088719331756987326336752609544554679053190"),new BigNumber("46334386109304297626605176326200171228593015936434935608226883304533104422563"), new BigNumber("1988670389410118360773415372815185782242081593130009872053936518971798366497")];


contract.verifyRingSignature.call(message, pub_keys, c_0, s, Y);


var numVoterPerRing = 50;
var registrationStartTime = eth.getBlock(eth.blockNumber).timestamp + (60 * 5);
var registrationEndTime = registrationStartTime + (60 * 10);
var registrationVotingGap = (60 * 10);
var votingStartTime = registrationEndTime + registrationVotingGap;
var votingEndTime = votingStartTime + (60 * 10);
var secretShareVerifyPublicParams = [123, 123, 123];
var thresholdKey = [new BigNumber('61598507609444339782700229998757014587305252825918919679374877505379218840344'), new BigNumber('56459345504517168965835287035258895834335349081953570984957421675645020814131')];


contract.finishSetUp.call(
    numVoterPerRing,
    registrationStartTime,
    registrationEndTime,
    registrationVotingGap,
    votingStartTime,
    votingEndTime,
    secretShareVerifyPublicParams,
    thresholdKey);

contract.finishSetUp.sendTransaction(
    numVoterPerRing,
    registrationStartTime,
    registrationEndTime,
    registrationVotingGap,
    votingStartTime,
    votingEndTime,
    secretShareVerifyPublicParams,
    thresholdKey,
    {from:eth.accounts[0], gas:4200000});


var pubKey = [new BigNumber("67235805167425861068089906426919154027038855607351758310384798001184755494578"), new BigNumber("81841085106827978484619575410326988922534763137673026675078713210806441367876")];

contract.registerVoter.call(pubKey);
contract.registerVoter.sendTransaction(pubKey, {from:eth.accounts[0], gas:4200000});


var pubKey2 = [new BigNumber("85473034565916135247677271420570079822810530773175997339048595143479354248184"), new BigNumber("35875461274977760536341633265829638010372913780954251651746349580793542787653")];
contract.registerVoter.sendTransaction(pubKey2, {from:eth.accounts[0], gas:4200000});
