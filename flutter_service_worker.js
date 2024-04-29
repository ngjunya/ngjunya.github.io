'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b080020563edfa3ed3a0324522a6caee",
".git/config": "91602776a8b501e896bc39d086a64494",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cffc3e75ac5afc66e3a69a078b88ea40",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "559626d8c2e991214aaf85e1cd89210e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d6b6a99dbce9536960c4b54a48f7f18",
".git/logs/refs/heads/main": "0d6b6a99dbce9536960c4b54a48f7f18",
".git/logs/refs/remotes/origin/main": "9013dc1f5ad076d6bc92b7628f2be179",
".git/objects/01/cbd203962b55ac37191c488569eb87a7026a92": "8374aeffe14ff593e0d023d5fad6fc16",
".git/objects/03/7feae88d6f9c5f64dae9a8c0409f585e03e738": "2fce742540baa72beea2c06b71587cd9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a4efa117907d7dcb6f218c267953c1c3da0d20": "467d21202c26c4bb106e5b4722c41dc1",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/06c5873feda00d2e42ae4e744b65e8369eaa33": "fc13c13eb4bfb620b7ac5f6ce6a78535",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/7537860ad962d64380f8b5d003eee56716fa0e": "f30a1bb39425f4b12ce53e13727bf21c",
".git/objects/13/4a402b6b63e7e69ced77a47606faa7befe2d06": "a385d1b712fdb409b6119873d9e7e949",
".git/objects/14/e5921595e48116f579cdf1c744e45c7e96e3d5": "01860399bf026f1c8c04eb08a8cb891d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/ac3dac74fd30f613dd962500b8eaacdd29d3ea": "b0b1aaddcf5ff6d411ecbad7433efaaa",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/35b2bb6097bef295ad0a9357254a30f628711d": "02bc30d872d02eab8a355b6e45e750d5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/2f68006ed5dc870fa4aecb9a578bd3abcb9656": "0ca0c57041b9e207c92a8c749c784eb9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/619e197f5294891727c1191ed70f5307383977": "da4a2b9b2e54acf12216fa7d55285775",
".git/objects/28/453955dc1e9d3319a3028faaf735cdc62a6f5c": "0d3f11919dc6c5508be3eeee89315642",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/c665f00aa5664f7bc0a2ff7d5e289b52aab1dd": "a7a9c7b67cb5d60a502bcd74f5a417e2",
".git/objects/39/0443d1d4f264c9a022a4c7e7e18846397c9dee": "ffc56b9a4665cd457b10ce0a6b4b27e1",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5c/eb6d7ff1e68e9e5d5bfc86fe536f914be926b6": "38b22d71d983124c0e26460e6539571b",
".git/objects/5d/dba7190103f973e587f277540527426e8ffc56": "7fb48476addf43a8e2aa5033f3ff039c",
".git/objects/60/32800f118e2f5cf15f265074c0914c2b509578": "4de65b10debc9b67dedeff68e8108fee",
".git/objects/61/ae8b858c2207bfe77ec2010a1c4abe0fef2f68": "d5ba2df428ac670366adaf5f3e0455c6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/68a70c68c677b2a1080f5e7807a4efc90deacd": "128c39c7c1a0ee6dea4497e9489c9197",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/58b84eea80bce1ab1362a39509d41549b377e3": "72ebd7601a3988e83311213f41ad16db",
".git/objects/6b/25499cffcf36c675c68a9dd26957bf1456b666": "c35aed156694bbb860eb28a7e0e2cfc2",
".git/objects/6b/97569cedfcac98262ce877ea227bee56af49c9": "50532fcc0f798c9bd0088d6f4fd7dc79",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/974f85183d7e687cc787f2b4dc7e038555252f": "1684e92a1b6cbb7aae0e1ab72d0862bc",
".git/objects/73/9894dc59cb24237607f032e99644b088a9d27e": "afd146a42c6866ad4ea2746a23e38455",
".git/objects/76/a98f60b3a5f1754817932ac8c9d6d5725645b1": "86b69d3fa90cc946711b3913be45fe14",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/7a/521b64546c4356c4c11f4700a9c0ef04d68fa1": "8f6a8f8a8731b61ecf139f184188d064",
".git/objects/7e/8cf90b6e774714b19b9b21793a444f8bd5abfe": "6679d12d4c23306aef2c8d962a4484f9",
".git/objects/81/6a4b1935907ca49259efda27cf7e1b787c516d": "6c05328b5008611581e9da83f5310008",
".git/objects/82/37eca29ba7144f19c5d6137a3df134ddb43031": "be2978480ef537fd26d20eb7c31e6e18",
".git/objects/83/9be1a584c0754dda65de242fa01999481d4c0d": "7b50618a789b45345e3b48736a9952df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/daec934feda0c76a21b2763a0d7e79a6bdb804": "a7b45357b58f1029811c81ac73d2b57e",
".git/objects/93/948fa3167d185062247b40b7a5a5f6c39dfe61": "2484383d1e4630055e5e3f6a80c06a37",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/db3b0992126be2712a4872e440c7b46e8a2c3c": "107eb2140d5f09f3000786bb088cdc33",
".git/objects/99/ee6744f83e3ce70c9148d1d76a0648af74751c": "5c7d11b2272aa2b66dc0929e2b1778ed",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/a1/89e5464c5bf4bb26204dea49b900fb2daec327": "529fbf81bc479c20a4b06cb8a83f1148",
".git/objects/ab/8e6e738989d7e89d458e8b68466b91fc07a9a1": "bae788b9a57be3876c9b1202107de4d5",
".git/objects/ac/97e9fd8ad77a849abf98e6d6942dcda087bef0": "b21f2a825f3ae43d054bb9c7745651d2",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/61c4d3beb644a75792ee960d2cb4266dbae653": "30ca2ceb7525a217ba1e9486249d2dc8",
".git/objects/b1/d329512df04b5c781b40724c9ac1505738d632": "62867804b86d271e7e8b5e753c6b17c1",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/b29e6a9c7ee23696077f9f0a0f9ce571689775": "139b3fcfbf410f692a578dbd54dd7ea7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/f8254e2240b2c28a53607254f064509e594290": "a0f1071b016f59a4c353afbfd252fca7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/404c27235916a71bfedaed7d2558b6ea0ac396": "d38518303e1cf7c6544838e910ff16e2",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/c55008b8fee42522ede85c02b66c349ddf2e70": "7dc1b52c8504b13b47c6c48850423d71",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cf/1f0e87db3e865cce26eb6b75cec7a3fc133540": "2819078ecf9f25b355c15435a6e17f15",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/ff99fa520e0877f15ac46d9bc9a2bc54232a42": "929cf628eaaa7dd9c7e1410b591c44e6",
".git/objects/df/8cb72f0d82f265831ce8fe5af09c9ff635e995": "ef5ca77bf47bafab1b14f6f7ef55109f",
".git/objects/df/a4cff0afbf41eb0d5d5ee7a90b4e5a531728af": "d3d4609843ff5bb932df6c96c7d881bf",
".git/objects/e1/4091dbd93454d5093e5daea6e4ffd268b9ba41": "7258e139eb9dd54d12c9c5cb7168cf01",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e1/ac1696be45a3f34f4d8d4f042ef291f05bafa6": "32d180a6cae2b5640dd6eef5aabe757f",
".git/objects/e5/1cd06a878539f752de047826214e287ffb5ad1": "47d1053fdb21cdbffc39a36e8a576667",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6e5701c32fae61bb2252540ce362720266995e": "fa598f9c39d54d6b3ef276bf632901e7",
".git/objects/f9/5d4553282356425f944cb8a3b334a3c4a36076": "139d730198074b1e9317441ab60eab7b",
".git/refs/heads/main": "5492ebbd1050baba58df69f41dfb719a",
".git/refs/remotes/origin/main": "5492ebbd1050baba58df69f41dfb719a",
"assets/AssetManifest.bin": "cc291223c0ce72ce29f22a27a6e6d0e1",
"assets/AssetManifest.bin.json": "94e00c543f203439e65e02d15841b2fc",
"assets/AssetManifest.json": "b6fd91eae3f393eb82385d9de5ed6536",
"assets/assets/appstore.png": "93cc0c9bc02ebbabaad2a06de6eedc63",
"assets/assets/atx.png": "cd7ba2a21cf8e6870e4aceaabd3c5636",
"assets/assets/icon.png": "a798013b163ddc8df95222579c5df02c",
"assets/assets/icon2.png": "5710f831ff60281fa684a982ce720af3",
"assets/assets/jun.jpg": "74c1777d9cefe921353a453e538486df",
"assets/assets/playstore.png": "2014c0791388f0e87f3edfc0012de79f",
"assets/assets/whip.png": "5836dcb9ea1f11fc74d8fe109a934f2f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5bcb21379fee95552d90f4f57acfe799",
"assets/NOTICES": "d33b841888e3922f9ef0d0d9ee906434",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "22a762f3b6332b1e6653bd94c6610a69",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "714cb24d2c57b80e3f8dd978d071069e",
"/": "714cb24d2c57b80e3f8dd978d071069e",
"main.dart.js": "16d42586c29d067ab925a4b809b64c9a",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"ngjunya.github.io/.git/config": "c64fb4a6bb2293a5ebf08d56d4f97a76",
"ngjunya.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ngjunya.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ngjunya.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ngjunya.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ngjunya.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"ngjunya.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ngjunya.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ngjunya.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ngjunya.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ngjunya.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ngjunya.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ngjunya.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ngjunya.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ngjunya.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ngjunya.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ngjunya.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"version.json": "03acefc4795e8573b194262cd3a4419f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
