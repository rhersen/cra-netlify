// curl -H "Content-Type: application/xml" -d "<REQUEST> <LOGIN authenticationkey='authenticationkey' /> <QUERY objecttype='TrainStation'> <FILTER> <OR> <IN name='CountyNo' value='1' /> <IN name='CountyNo' value='2' /> <IN name='CountyNo' value='3' /> <IN name='CountyNo' value='4' /> </OR> </FILTER> <INCLUDE>LocationSignature</INCLUDE> <INCLUDE>AdvertisedShortLocationName</INCLUDE> <INCLUDE>Geometry</INCLUDE> </QUERY> </REQUEST>" http://api.trafikinfo.trafikverket.se/v1.2/data.json > 1234-stations.json

const raw = {
  RESPONSE: {
    RESULT: [
      {
        TrainStation: [
          {
            AdvertisedShortLocationName: "Almnäs",
            Geometry: {
              SWEREF99TM: "POINT (643349 6561610)",
              WGS84: "POINT (17.507802824548527 59.169404149769846)"
            },
            LocationSignature: "Alä"
          },
          {
            AdvertisedShortLocationName: "Arlanda",
            Geometry: {
              SWEREF99TM: "POINT (665036 6615971)",
              WGS84: "POINT (17.928489392445165 59.649072120867778)"
            },
            LocationSignature: "Arnc"
          },
          {
            AdvertisedShortLocationName: "Arlanda nedre",
            Geometry: {
              SWEREF99TM: "POINT (664813 6614137)",
              WGS84: "POINT (17.923106648878097 59.632712921589757)"
            },
            LocationSignature: "Arne"
          },
          {
            AdvertisedShortLocationName: "Arlanda N",
            Geometry: {
              SWEREF99TM: "POINT (665100 6616247)",
              WGS84: "POINT (17.929839291864006 59.651521946991636)"
            },
            LocationSignature: "Arnn"
          },
          {
            AdvertisedShortLocationName: "Arlanda S",
            Geometry: {
              SWEREF99TM: "POINT (665038 6615720)",
              WGS84: "POINT (17.928328521669549 59.646820357358884)"
            },
            LocationSignature: "Arns"
          },
          {
            AdvertisedShortLocationName: "Barkarby",
            Geometry: {
              SWEREF99TM: "POINT (662554 6588698)",
              WGS84: "POINT (17.86367834371055 59.4054464125127)"
            },
            LocationSignature: "Bkb"
          },
          {
            AdvertisedShortLocationName: "Björnkulla",
            Geometry: {
              SWEREF99TM: "POINT (667224 6566413)",
              WGS84: "POINT (17.928581196472948 59.203755842684181)"
            },
            LocationSignature: "Bjn"
          },
          {
            AdvertisedShortLocationName: "Bränninge",
            Geometry: {
              SWEREF99TM: "POINT (650758 6558674)",
              WGS84: "POINT (17.635236550549021 59.14050116995778)"
            },
            LocationSignature: "Bre"
          },
          {
            AdvertisedShortLocationName: "Bro Nygård",
            Geometry: {
              SWEREF99TM: "POINT (651265 6598512)",
              WGS84: "POINT (17.672002311768015 59.497689369386769)"
            },
            LocationSignature: "Brny"
          },
          {
            AdvertisedShortLocationName: "Bro",
            Geometry: {
              SWEREF99TM: "POINT (648991 6600050)",
              WGS84: "POINT (17.632958348706719 59.51230001368409)"
            },
            LocationSignature: "Bro"
          },
          {
            AdvertisedShortLocationName: "Blackvreten",
            Geometry: {
              SWEREF99TM: "POINT (664059 6611304)",
              WGS84: "POINT (17.907555581954057 59.607603208902582)"
            },
            LocationSignature: "Bvr"
          },
          {
            AdvertisedShortLocationName: "Brista",
            Geometry: {
              SWEREF99TM: "POINT (661774 6611469)",
              WGS84: "POINT (17.867244912541 59.609974570890515)"
            },
            LocationSignature: "Bra"
          },
          {
            AdvertisedShortLocationName: "Bällsta",
            Geometry: {
              SWEREF99TM: "POINT (673739 6602430)",
              WGS84: "POINT (18.07156718518678 59.524115560852458)"
            },
            LocationSignature: "Bäl"
          },
          {
            AdvertisedShortLocationName: "Duvbo",
            Geometry: {
              SWEREF99TM: "POINT (666612 6585006)",
              WGS84: "POINT (17.932196987513084 59.370748674053949)"
            },
            LocationSignature: "Duo"
          },
          {
            AdvertisedShortLocationName: "Dånviken",
            Geometry: {
              SWEREF99TM: "POINT (655058 6564353)",
              WGS84: "POINT (17.714339760889871 59.189898010841262)"
            },
            LocationSignature: "Dån"
          },
          {
            AdvertisedShortLocationName: "Stockholm C",
            Geometry: {
              SWEREF99TM: "POINT (673924 6580788)",
              WGS84: "POINT (18.057267018575825 59.329970842872264)"
            },
            LocationSignature: "Cst"
          },
          {
            AdvertisedShortLocationName: "Farsta strand",
            Geometry: {
              SWEREF99TM: "POINT (677073 6570533)",
              WGS84: "POINT (18.104137121732695 59.236704960342763)"
            },
            LocationSignature: "Fas"
          },
          {
            AdvertisedShortLocationName: "Flemingsberg",
            Geometry: {
              SWEREF99TM: "POINT (668247 6568187)",
              WGS84: "POINT (17.947841798445623 59.219261489884843)"
            },
            LocationSignature: "Flb"
          },
          {
            AdvertisedShortLocationName: "Gröndalsviken",
            Geometry: {
              SWEREF99TM: "POINT (668892 6532535)",
              WGS84: "POINT (17.931729038968886 58.899253202251622)"
            },
            LocationSignature: "Gdv"
          },
          {
            AdvertisedShortLocationName: "Gula huset",
            Geometry: {
              SWEREF99TM: "POINT (670685 6585712)",
              WGS84: "POINT (18.004324812598888 59.375450332677566)"
            },
            LocationSignature: "Ghu"
          },
          {
            AdvertisedShortLocationName: "Hallstavik",
            Geometry: {
              SWEREF99TM: "POINT (700193 6662511)",
              WGS84: "POINT (18.595816739384155 60.050768783089786)"
            },
            LocationSignature: "Hak"
          },
          {
            AdvertisedShortLocationName: "Helenelund",
            Geometry: {
              SWEREF99TM: "POINT (668181 6589289)",
              WGS84: "POINT (17.963119895149489 59.408535964681477)"
            },
            LocationSignature: "Hel"
          },
          {
            AdvertisedShortLocationName: "Hemfosa",
            Geometry: {
              SWEREF99TM: "POINT (670634 6551515)",
              WGS84: "POINT (17.976580294148828 59.068788682531618)"
            },
            LocationSignature: "Hfa"
          },
          {
            AdvertisedShortLocationName: "Hagalund",
            Geometry: {
              SWEREF99TM: "POINT (670775 6585341)",
              WGS84: "POINT (18.005611850474132 59.372086830711993)"
            },
            LocationSignature: "Hgl"
          },
          {
            AdvertisedShortLocationName: "Häggvik",
            Geometry: {
              SWEREF99TM: "POINT (666342 6593076)",
              WGS84: "POINT (17.933708229792504 59.443229737156024)"
            },
            LocationSignature: "Hgv"
          },
          {
            AdvertisedShortLocationName: "Hölö",
            Geometry: {
              SWEREF99TM: "POINT (645499 6545700)",
              WGS84: "POINT (17.534812607709043 59.02593382032083)"
            },
            LocationSignature: "Hlö"
          },
          {
            AdvertisedShortLocationName: "Garnudden",
            Geometry: {
              SWEREF99TM: "POINT (658267 6564870)",
              WGS84: "POINT (17.770814702592229 59.193351223695139)"
            },
            LocationSignature: "Gau"
          },
          {
            AdvertisedShortLocationName: "Handen",
            Geometry: {
              SWEREF99TM: "POINT (679149 6562777)",
              WGS84: "POINT (18.134083407444244 59.166285127139389)"
            },
            LocationSignature: "Hnd"
          },
          {
            AdvertisedShortLocationName: "Jordbro",
            Geometry: {
              SWEREF99TM: "POINT (678848 6560092)",
              WGS84: "POINT (18.126627633514342 59.14233539839546)"
            },
            LocationSignature: "Jbo"
          },
          {
            AdvertisedShortLocationName: "Huddinge",
            Geometry: {
              SWEREF99TM: "POINT (669888 6570098)",
              WGS84: "POINT (17.978043145418106 59.235745452523467)"
            },
            LocationSignature: "Hu"
          },
          {
            AdvertisedShortLocationName: "Jakobsberg",
            Geometry: {
              SWEREF99TM: "POINT (660733 6590667)",
              WGS84: "POINT (17.833119618641522 59.423805877428372)"
            },
            LocationSignature: "Jkb"
          },
          {
            AdvertisedShortLocationName: "Huvudsta",
            Geometry: {
              SWEREF99TM: "POINT (670580 6583400)",
              WGS84: "POINT (18.000647047100582 59.354759264587329)"
            },
            LocationSignature: "Huv"
          },
          {
            AdvertisedShortLocationName: "Järna",
            Geometry: {
              SWEREF99TM: "POINT (647135 6553329)",
              WGS84: "POINT (17.568388900751486 59.093817558997308)"
            },
            LocationSignature: "Jn"
          },
          {
            AdvertisedShortLocationName: "Högdalen",
            Geometry: {
              SWEREF99TM: "POINT (673424 6572669)",
              WGS84: "POINT (18.041982001377352 59.257368988300769)"
            },
            LocationSignature: "Hön"
          },
          {
            AdvertisedShortLocationName: "Kallhäll",
            Geometry: {
              SWEREF99TM: "POINT (659134 6593781)",
              WGS84: "POINT (17.8072890439651 59.452344176537892)"
            },
            LocationSignature: "Khä"
          },
          {
            AdvertisedShortLocationName: "Krigslida",
            Geometry: {
              SWEREF99TM: "POINT (675527 6556210)",
              WGS84: "POINT (18.0655526617058 59.108906680414336)"
            },
            LocationSignature: "Kda"
          },
          {
            AdvertisedShortLocationName: "Karlberg",
            Geometry: {
              SWEREF99TM: "POINT (672231 6581859)",
              WGS84: "POINT (18.028410943790742 59.340269235401472)"
            },
            LocationSignature: "Ke"
          },
          {
            AdvertisedShortLocationName: "Kummelby",
            Geometry: {
              SWEREF99TM: "POINT (667775 6590278)",
              WGS84: "POINT (17.956751377736484 59.417567471474861)"
            },
            LocationSignature: "Kmy"
          },
          {
            AdvertisedShortLocationName: "Kungsängen",
            Geometry: {
              SWEREF99TM: "POINT (655929 6596521)",
              WGS84: "POINT (17.752825186759477 59.478122751421949)"
            },
            LocationSignature: "Kän"
          },
          {
            AdvertisedShortLocationName: "Märsta",
            Geometry: {
              SWEREF99TM: "POINT (661368 6613430)",
              WGS84: "POINT (17.861556068154965 59.627719092214846)"
            },
            LocationSignature: "Mr"
          },
          {
            AdvertisedShortLocationName: "Liljeholmen",
            Geometry: {
              SWEREF99TM: "POINT (672275 6578362)",
              WGS84: "POINT (18.026391864198825 59.308891397088743)"
            },
            LocationSignature: "Lm"
          },
          {
            AdvertisedShortLocationName: "Nykvarn",
            Geometry: {
              SWEREF99TM: "POINT (638984 6562488)",
              WGS84: "POINT (17.432080395575703 59.1787322753928)"
            },
            LocationSignature: "Nkv"
          },
          {
            AdvertisedShortLocationName: "Malmsjö",
            Geometry: {
              SWEREF99TM: "POINT (657981 6560482)",
              WGS84: "POINT (17.762635393655522 59.154097629758809)"
            },
            LocationSignature: "Msj"
          },
          {
            AdvertisedShortLocationName: "Stockholms norra",
            Geometry: {
              SWEREF99TM: "POINT (672483 6582680)",
              WGS84: "POINT (18.033491804221473 59.347528699869272)"
            },
            LocationSignature: "Nst"
          },
          {
            AdvertisedShortLocationName: "Norrviken",
            Geometry: {
              SWEREF99TM: "POINT (665733 6594848)",
              WGS84: "POINT (17.924356611552174 59.459362194827804)"
            },
            LocationSignature: "Nvk"
          },
          {
            AdvertisedShortLocationName: "Nynäshamn",
            Geometry: {
              SWEREF99TM: "POINT (669935 6532699)",
              WGS84: "POINT (17.949931842139648 58.900312616218351)"
            },
            LocationSignature: "Nyh"
          },
          {
            AdvertisedShortLocationName: "Mölnbo",
            Geometry: {
              SWEREF99TM: "POINT (638726 6547837)",
              WGS84: "POINT (17.418288054007117 59.047361184619177)"
            },
            LocationSignature: "Mö"
          },
          {
            AdvertisedShortLocationName: "Nyboda",
            Geometry: {
              SWEREF99TM: "POINT (672021 6577352)",
              WGS84: "POINT (18.021133062535558 59.299937470441385)"
            },
            LocationSignature: "Nba"
          },
          {
            AdvertisedShortLocationName: "Norra bantorget",
            Geometry: {
              SWEREF99TM: "POINT (673188 6581494)",
              WGS84: "POINT (18.044917606512314 59.33660445660729)"
            },
            LocationSignature: "Nbt"
          },
          {
            AdvertisedShortLocationName: "Nynäsgård",
            Geometry: {
              SWEREF99TM: "POINT (669443 6534174)",
              WGS84: "POINT (17.942529489313543 58.913736221868994)"
            },
            LocationSignature: "Ngd"
          },
          {
            AdvertisedShortLocationName: "Rotebro",
            Geometry: {
              SWEREF99TM: "POINT (665141 6596623)",
              WGS84: "POINT (17.915298260190166 59.475514234039295)"
            },
            LocationSignature: "R"
          },
          {
            AdvertisedShortLocationName: "Ryssjöbrink",
            Geometry: {
              SWEREF99TM: "POINT (633358 6565713)",
              WGS84: "POINT (17.335702926296598 59.209473922363408)"
            },
            LocationSignature: "Ryb"
          },
          {
            AdvertisedShortLocationName: "Sthlm Odenplan",
            Geometry: {
              SWEREF99TM: "POINT (673161 6582367)",
              WGS84: "POINT (18.045144912665808 59.344444151961333)"
            },
            LocationSignature: "Sod"
          },
          {
            AdvertisedShortLocationName: "Solna",
            Geometry: {
              SWEREF99TM: "POINT (671076 6584623)",
              WGS84: "POINT (18.010330020813157 59.365525934131234)"
            },
            LocationSignature: "So"
          },
          {
            AdvertisedShortLocationName: "Sollentuna",
            Geometry: {
              SWEREF99TM: "POINT (667293 6591402)",
              WGS84: "POINT (17.949147258050402 59.427839621686111)"
            },
            LocationSignature: "Sol"
          },
          {
            AdvertisedShortLocationName: "Rönninge",
            Geometry: {
              SWEREF99TM: "POINT (657205 6564844)",
              WGS84: "POINT (17.752228203359241 59.193512662470383)"
            },
            LocationSignature: "Rön"
          },
          {
            AdvertisedShortLocationName: "Skavstaby",
            Geometry: {
              SWEREF99TM: "POINT (663677 6604933)",
              WGS84: "POINT (17.895877592113234 59.550615770046676)"
            },
            LocationSignature: "Skby"
          },
          {
            AdvertisedShortLocationName: "Skogås",
            Geometry: {
              SWEREF99TM: "POINT (679983 6568735)",
              WGS84: "POINT (18.153571867419188 59.219356858542994)"
            },
            LocationSignature: "Skg"
          },
          {
            AdvertisedShortLocationName: "Spånga",
            Geometry: {
              SWEREF99TM: "POINT (664563 6586405)",
              WGS84: "POINT (17.897261239158393 59.384100766747025)"
            },
            LocationSignature: "Spå"
          },
          {
            AdvertisedShortLocationName: "Rosersberg",
            Geometry: {
              SWEREF99TM: "POINT (662607 6608649)",
              WGS84: "POINT (17.879821813887027 59.584359915422432)"
            },
            LocationSignature: "Rs"
          },
          {
            AdvertisedShortLocationName: "Sundbyberg",
            Geometry: {
              SWEREF99TM: "POINT (668912 6584003)",
              WGS84: "POINT (17.971824561472314 59.360838317032425)"
            },
            LocationSignature: "Sub"
          },
          {
            AdvertisedShortLocationName: "Stockholms södra",
            Geometry: {
              SWEREF99TM: "POINT (674193 6578955)",
              WGS84: "POINT (18.060508539616663 59.313422739013326)"
            },
            LocationSignature: "Sst"
          },
          {
            AdvertisedShortLocationName: "Stockholm City",
            Geometry: {
              SWEREF99TM: "POINT (674343 6581075)",
              WGS84: "POINT (18.064852022201919 59.332371652020754)"
            },
            LocationSignature: "Sci"
          },
          {
            AdvertisedShortLocationName: "Segersäng",
            Geometry: {
              SWEREF99TM: "POINT (667991 6547018)",
              WGS84: "POINT (17.927110595566532 59.029504897567406)"
            },
            LocationSignature: "Ssä"
          },
          {
            AdvertisedShortLocationName: "Stuvsta",
            Geometry: {
              SWEREF99TM: "POINT (670885 6572252)",
              WGS84: "POINT (17.997188639671837 59.254661701565212)"
            },
            LocationSignature: "Sta"
          },
          {
            AdvertisedShortLocationName: "Vega",
            Geometry: {
              SWEREF99TM: "POINT (679142 6565064.8)",
              WGS84: "POINT (18.135840879679357 59.186802676715665)"
            },
            LocationSignature: "Vga"
          },
          {
            AdvertisedShortLocationName: "Gåshaga brygga",
            Geometry: {
              SWEREF99TM: "POINT (683822 6584256)",
              WGS84: "POINT (18.233900831405908 59.356871363470781)"
            },
            LocationSignature: "wGåb"
          },
          {
            AdvertisedShortLocationName: "Gåshaga",
            Geometry: {
              SWEREF99TM: "POINT (683482 6584223)",
              WGS84: "POINT (18.227902262967749 59.356723541320626)"
            },
            LocationSignature: "wGåh"
          },
          {
            AdvertisedShortLocationName: "Ulriksdal",
            Geometry: {
              SWEREF99TM: "POINT (670491 6586185)",
              WGS84: "POINT (18.00129058481793 59.3797706297159)"
            },
            LocationSignature: "Udl"
          },
          {
            AdvertisedShortLocationName: "Höglandstorget",
            Geometry: {
              SWEREF99TM: "POINT (667275 6579764)",
              WGS84: "POINT (17.939777900735383 59.323474134169345)"
            },
            LocationSignature: "wHlt"
          },
          {
            AdvertisedShortLocationName: "Västerhaninge",
            Geometry: {
              SWEREF99TM: "POINT (677618 6557882)",
              WGS84: "POINT (18.103366450191004 59.12303313879594)"
            },
            LocationSignature: "Vhe"
          },
          {
            AdvertisedShortLocationName: "Högberga",
            Geometry: {
              SWEREF99TM: "POINT (681615 6582752)",
              WGS84: "POINT (18.193876545373673 59.3443423712286)"
            },
            LocationSignature: "wHöb"
          },
          {
            AdvertisedShortLocationName: "Södertälje C",
            Geometry: {
              SWEREF99TM: "POINT (650142 6564295)",
              WGS84: "POINT (17.628350245585395 59.191144920124572)"
            },
            LocationSignature: "Söc"
          },
          {
            AdvertisedShortLocationName: "Södertälje hamn",
            Geometry: {
              SWEREF99TM: "POINT (651279 6562834)",
              WGS84: "POINT (17.647215457098191 59.177634908472093)"
            },
            LocationSignature: "Söd"
          },
          {
            AdvertisedShortLocationName: "Söderby",
            Geometry: {
              SWEREF99TM: "POINT (659554 6565262)",
              WGS84: "POINT (17.793602828281763 59.196385520619955)"
            },
            LocationSignature: "Södy"
          },
          {
            AdvertisedShortLocationName: "Södertälje kanal",
            Geometry: {
              SWEREF99TM: "POINT (651057 6563613)",
              WGS84: "POINT (17.643875413098179 59.184702201969614)"
            },
            LocationSignature: "Söka"
          },
          {
            AdvertisedShortLocationName: "Upplands Väsby",
            Geometry: {
              SWEREF99TM: "POINT (664013 6601588)",
              WGS84: "POINT (17.899233873234227 59.520484953244853)"
            },
            LocationSignature: "Upv"
          },
          {
            AdvertisedShortLocationName: "Södertälje Syd",
            Geometry: {
              SWEREF99TM: "POINT (651243 6561248)",
              WGS84: "POINT (17.645486487135074 59.163419995708246)"
            },
            LocationSignature: "Söu"
          },
          {
            AdvertisedShortLocationName: "Utsikten",
            Geometry: {
              SWEREF99TM: "POINT (665389 6566261)",
              WGS84: "POINT (17.896377300602548 59.2031118281726)"
            },
            LocationSignature: "Uts"
          },
          {
            AdvertisedShortLocationName: "Södertälje S",
            Geometry: {
              SWEREF99TM: "POINT (651385 6561240)",
              WGS84: "POINT (17.647961677699406 59.163297667082155)"
            },
            LocationSignature: "Söö"
          },
          {
            AdvertisedShortLocationName: "Klövervägen",
            Geometry: {
              SWEREF99TM: "POINT (669208 6579986)",
              WGS84: "POINT (17.973870734398464 59.324694958930337)"
            },
            LocationSignature: "wKlv"
          },
          {
            AdvertisedShortLocationName: "Tomteboda bangård",
            Geometry: {
              SWEREF99TM: "POINT (671743 6582437)",
              WGS84: "POINT (18.020304631522645 59.3456514379661)"
            },
            LocationSignature: "Tm"
          },
          {
            AdvertisedShortLocationName: "Kottla",
            Geometry: {
              SWEREF99TM: "POINT (680828 6582722)",
              WGS84: "POINT (18.1800359947369 59.344411379668557)"
            },
            LocationSignature: "wKoa"
          },
          {
            AdvertisedShortLocationName: "Tomteboda övre",
            Geometry: {
              SWEREF99TM: "POINT (671495 6583032)",
              WGS84: "POINT (18.016423862998142 59.351088102413044)"
            },
            LocationSignature: "Tmö"
          },
          {
            AdvertisedShortLocationName: "Käppala",
            Geometry: {
              SWEREF99TM: "POINT (682924 6583742)",
              WGS84: "POINT (18.217695117662636 59.352653287383589)"
            },
            LocationSignature: "wKäp"
          },
          {
            AdvertisedShortLocationName: "Aga",
            Geometry: {
              SWEREF99TM: "POINT (679479 6582868)",
              WGS84: "POINT (18.156476025262659 59.346296449912714)"
            },
            LocationSignature: "wAga"
          },
          {
            AdvertisedShortLocationName: "Larsberg",
            Geometry: {
              SWEREF99TM: "POINT (678873 6583309)",
              WGS84: "POINT (18.146203151896497 59.350508075964285)"
            },
            LocationSignature: "wLab"
          },
          {
            AdvertisedShortLocationName: "Alléparken",
            Geometry: {
              SWEREF99TM: "POINT (669195 6580426)",
              WGS84: "POINT (17.973987618728962 59.328646128444653)"
            },
            LocationSignature: "wAll"
          },
          {
            AdvertisedShortLocationName: "Alvik",
            Geometry: {
              SWEREF99TM: "POINT (669627 6580979)",
              WGS84: "POINT (17.982003937832268 59.333432105336861)"
            },
            LocationSignature: "wAlv"
          },
          {
            AdvertisedShortLocationName: "Smedslätten",
            Geometry: {
              SWEREF99TM: "POINT (668649 6579546)",
              WGS84: "POINT (17.963717645341116 59.320972586205741)"
            },
            LocationSignature: "wSms"
          },
          {
            AdvertisedShortLocationName: "Baggeby",
            Geometry: {
              SWEREF99TM: "POINT (678141 6583980)",
              WGS84: "POINT (18.133905338031912 59.35683449080269)"
            },
            LocationSignature: "wBag"
          },
          {
            AdvertisedShortLocationName: "Skärsätra",
            Geometry: {
              SWEREF99TM: "POINT (680279 6582579)",
              WGS84: "POINT (18.170278855757868 59.343364096459055)"
            },
            LocationSignature: "wSkr"
          },
          {
            AdvertisedShortLocationName: "Bodal",
            Geometry: {
              SWEREF99TM: "POINT (678416 6583643)",
              WGS84: "POINT (18.138455611843831 59.353696475730722)"
            },
            LocationSignature: "wBod"
          },
          {
            AdvertisedShortLocationName: "Toresta",
            Geometry: {
              SWEREF99TM: "POINT (645591 6602293)",
              WGS84: "POINT (17.574479262092098 59.533616523256647)"
            },
            LocationSignature: "Tot"
          },
          {
            AdvertisedShortLocationName: "Brevik",
            Geometry: {
              SWEREF99TM: "POINT (682149 6583230)",
              WGS84: "POINT (18.203654485120779 59.348398005363443)"
            },
            LocationSignature: "wBvi"
          },
          {
            AdvertisedShortLocationName: "Värtan",
            Geometry: {
              SWEREF99TM: "POINT (675956 6583235)",
              WGS84: "POINT (18.094923050232673 59.3510713152609)"
            },
            LocationSignature: "Vn"
          },
          {
            AdvertisedShortLocationName: "Nockeby",
            Geometry: {
              SWEREF99TM: "POINT (666042 6580298)",
              WGS84: "POINT (17.918552137083967 59.328749944536682)"
            },
            LocationSignature: "wNob"
          },
          {
            AdvertisedShortLocationName: "Nockeby torg",
            Geometry: {
              SWEREF99TM: "POINT (666564 6580363)",
              WGS84: "POINT (17.927763741891816 59.329127283479373)"
            },
            LocationSignature: "wNot"
          },
          {
            AdvertisedShortLocationName: "Torsvik",
            Geometry: {
              SWEREF99TM: "POINT (677200 6584504)",
              WGS84: "POINT (18.117810788530836 59.36192953892423)"
            },
            LocationSignature: "wTov"
          },
          {
            AdvertisedShortLocationName: "Olovslund",
            Geometry: {
              SWEREF99TM: "POINT (666977 6580253)",
              WGS84: "POINT (17.934927046911895 59.327977622487133)"
            },
            LocationSignature: "wOll"
          },
          {
            AdvertisedShortLocationName: "Ålstens Gård",
            Geometry: {
              SWEREF99TM: "POINT (667956 6579464)",
              WGS84: "POINT (17.951494334883026 59.320513351606344)"
            },
            LocationSignature: "wÅlG"
          },
          {
            AdvertisedShortLocationName: "Tungelsta",
            Geometry: {
              SWEREF99TM: "POINT (674467 6555486)",
              WGS84: "POINT (18.046493774584693 59.102849543897172)"
            },
            LocationSignature: "Ts"
          },
          {
            AdvertisedShortLocationName: "Ropsten",
            Geometry: {
              SWEREF99TM: "POINT (676424 6584043)",
              WGS84: "POINT (18.103802686428551 59.358121164186819)"
            },
            LocationSignature: "wRos"
          },
          {
            AdvertisedShortLocationName: "Ålstensgatan",
            Geometry: {
              SWEREF99TM: "POINT (668187 6579789)",
              WGS84: "POINT (17.955800675611837 59.323336105347906)"
            },
            LocationSignature: "wÅls"
          },
          {
            AdvertisedShortLocationName: "Tumba",
            Geometry: {
              SWEREF99TM: "POINT (662096 6565716)",
              WGS84: "POINT (17.838385524043542 59.199494369094495)"
            },
            LocationSignature: "Tu"
          },
          {
            AdvertisedShortLocationName: "Tullinge",
            Geometry: {
              SWEREF99TM: "POINT (665884 6566571)",
              WGS84: "POINT (17.905269419542879 59.205698927528871)"
            },
            LocationSignature: "Tul"
          },
          {
            AdvertisedShortLocationName: "Frösunda",
            Geometry: {
              SWEREF99TM: "POINT (678790 6613818)",
              WGS84: "POINT (18.170307313549305 59.624097014229065)"
            },
            LocationSignature: "xFsu"
          },
          {
            AdvertisedShortLocationName: "Fisksätra",
            Geometry: {
              SWEREF99TM: "POINT (685420 6577335)",
              WGS84: "POINT (18.256014844936281 59.294120504032634)"
            },
            LocationSignature: "xFsä"
          },
          {
            AdvertisedShortLocationName: "Trångsund",
            Geometry: {
              SWEREF99TM: "POINT (678632 6569613)",
              WGS84: "POINT (18.13066308690351 59.2278010926431)"
            },
            LocationSignature: "Tåd"
          },
          {
            AdvertisedShortLocationName: "Molnby",
            Geometry: {
              SWEREF99TM: "POINT (674338 6606172)",
              WGS84: "POINT (18.085207687052996 59.557420819100969)"
            },
            LocationSignature: "xMnb"
          },
          {
            AdvertisedShortLocationName: "Altorp",
            Geometry: {
              SWEREF99TM: "POINT (674394 6589833)",
              WGS84: "POINT (18.07284721681037 59.410885681003634)"
            },
            LocationSignature: "xAlp"
          },
          {
            AdvertisedShortLocationName: "Tunagård",
            Geometry: {
              SWEREF99TM: "POINT (687375 6596904)",
              WGS84: "POINT (18.307335802628376 59.468699209727951)"
            },
            LocationSignature: "xTug"
          },
          {
            AdvertisedShortLocationName: "Mörby",
            Geometry: {
              SWEREF99TM: "POINT (673034 6587677)",
              WGS84: "POINT (18.047185484418566 59.39211340077091)"
            },
            LocationSignature: "xMöb"
          },
          {
            AdvertisedShortLocationName: "Galoppfältet",
            Geometry: {
              SWEREF99TM: "POINT (674866 6593862)",
              WGS84: "POINT (18.084438120209207 59.446818060645725)"
            },
            LocationSignature: "xGpf"
          },
          {
            AdvertisedShortLocationName: "Bråvallavägen",
            Geometry: {
              SWEREF99TM: "POINT (673718 6589201)",
              WGS84: "POINT (18.060444090481472 59.405497959798929)"
            },
            LocationSignature: "xBvv"
          },
          {
            AdvertisedShortLocationName: "Taxinge-Näsby",
            Geometry: {
              SWEREF99TM: "POINT (631237 6569131)",
              WGS84: "POINT (17.300654057314397 59.240805515938838)"
            },
            LocationSignature: "xTx"
          },
          {
            AdvertisedShortLocationName: "Näsbyallé",
            Geometry: {
              SWEREF99TM: "POINT (675008 6591696)",
              WGS84: "POINT (18.085168459974835 59.4273364078845)"
            },
            LocationSignature: "xNbe"
          },
          {
            AdvertisedShortLocationName: "Bällsta",
            Geometry: {
              SWEREF99TM: "POINT (673774 6602296)",
              WGS84: "POINT (18.072075530118497 59.522899466094422)"
            },
            LocationSignature: "xBäl"
          },
          {
            AdvertisedShortLocationName: "Täby kyrkby",
            Geometry: {
              SWEREF99TM: "POINT (673601 6598947)",
              WGS84: "POINT (18.066293874857447 59.492940479861694)"
            },
            LocationSignature: "xTäb"
          },
          {
            AdvertisedShortLocationName: "Näsbypark",
            Geometry: {
              SWEREF99TM: "POINT (675574 6592038)",
              WGS84: "POINT (18.09540968647935 59.430167197571265)"
            },
            LocationSignature: "xNbp"
          },
          {
            AdvertisedShortLocationName: "Neglinge",
            Geometry: {
              SWEREF99TM: "POINT (687509 6576814)",
              WGS84: "POINT (18.29217669854955 59.288528260593466)"
            },
            LocationSignature: "xNeg"
          },
          {
            AdvertisedShortLocationName: "Täby Centrum",
            Geometry: {
              SWEREF99TM: "POINT (674332 6593560)",
              WGS84: "POINT (18.074788735664004 59.444331861691019)"
            },
            LocationSignature: "xTäc"
          },
          {
            AdvertisedShortLocationName: "Djursholms Ekeby",
            Geometry: {
              SWEREF99TM: "POINT (673517 6590027)",
              WGS84: "POINT (18.057576876345586 59.412987845686629)"
            },
            LocationSignature: "xDje"
          },
          {
            AdvertisedShortLocationName: "Nacka",
            Geometry: {
              SWEREF99TM: "POINT (678192 6578377)",
              WGS84: "POINT (18.130172547252563 59.3065721897222)"
            },
            LocationSignature: "xNka"
          },
          {
            AdvertisedShortLocationName: "Universitetet",
            Geometry: {
              SWEREF99TM: "POINT (673411 6584650)",
              WGS84: "POINT (18.051372336635271 59.364814106901953)"
            },
            LocationSignature: "xUnv"
          },
          {
            AdvertisedShortLocationName: "Täljö",
            Geometry: {
              SWEREF99TM: "POINT (683274 6597202)",
              WGS84: "POINT (18.235340631788731 59.473181071721847)"
            },
            LocationSignature: "xTäl"
          },
          {
            AdvertisedShortLocationName: "Djursholms Ösby",
            Geometry: {
              SWEREF99TM: "POINT (673613 6588236)",
              WGS84: "POINT (18.057816910970494 59.396887842703777)"
            },
            LocationSignature: "xDjö"
          },
          {
            AdvertisedShortLocationName: "Henriksdal",
            Geometry: {
              SWEREF99TM: "POINT (676913 6578951)",
              WGS84: "POINT (18.108213766779954 59.3122566315866)"
            },
            LocationSignature: "xHed"
          },
          {
            AdvertisedShortLocationName: "Viggbyholm",
            Geometry: {
              SWEREF99TM: "POINT (675971 6594189)",
              WGS84: "POINT (18.104164877840077 59.449288972896312)"
            },
            LocationSignature: "xVbm"
          },
          {
            AdvertisedShortLocationName: "Ormsta",
            Geometry: {
              SWEREF99TM: "POINT (674070 6604910)",
              WGS84: "POINT (18.079438889749383 59.546216172473514)"
            },
            LocationSignature: "xOta"
          },
          {
            AdvertisedShortLocationName: "Ekskogen",
            Geometry: {
              SWEREF99TM: "POINT (681862 6615634)",
              WGS84: "POINT (18.226243736528897 59.639050979118394)"
            },
            LocationSignature: "xEkg"
          },
          {
            AdvertisedShortLocationName: "Enebyberg",
            Geometry: {
              SWEREF99TM: "POINT (673083 6591446)",
              WGS84: "POINT (18.051087404118764 59.425891223587023)"
            },
            LocationSignature: "xEnb"
          },
          {
            AdvertisedShortLocationName: "Vendevägen",
            Geometry: {
              SWEREF99TM: "POINT (674158 6588591)",
              WGS84: "POINT (18.067687906277655 59.3998461453414)"
            },
            LocationSignature: "xVev"
          },
          {
            AdvertisedShortLocationName: "Hägernäs",
            Geometry: {
              SWEREF99TM: "POINT (677120 6594434)",
              WGS84: "POINT (18.124601422280108 59.451003067478659)"
            },
            LocationSignature: "xHgä"
          },
          {
            AdvertisedShortLocationName: "Visinge",
            Geometry: {
              SWEREF99TM: "POINT (673577 6595559)",
              WGS84: "POINT (18.063116695886418 59.462569760875745)"
            },
            LocationSignature: "xVis"
          },
          {
            AdvertisedShortLocationName: "Erstaviksbadet",
            Geometry: {
              SWEREF99TM: "POINT (687190 6575060)",
              WGS84: "POINT (18.28506986875821 59.272944121224263)"
            },
            LocationSignature: "xEvb"
          },
          {
            AdvertisedShortLocationName: "Ensta",
            Geometry: {
              SWEREF99TM: "POINT (673660 6594546)",
              WGS84: "POINT (18.063756273117679 59.453451711507952)"
            },
            LocationSignature: "xEsa"
          },
          {
            AdvertisedShortLocationName: "Vallentuna",
            Geometry: {
              SWEREF99TM: "POINT (674166 6603570)",
              WGS84: "POINT (18.080036678438514 59.53416057661871)"
            },
            LocationSignature: "xVlt"
          },
          {
            AdvertisedShortLocationName: "Rydbo",
            Geometry: {
              SWEREF99TM: "POINT (680453 6596199)",
              WGS84: "POINT (18.184784410871831 59.465410150469886)"
            },
            LocationSignature: "xRdb"
          },
          {
            AdvertisedShortLocationName: "Roslags Näsby",
            Geometry: {
              SWEREF99TM: "POINT (673394 6592504)",
              WGS84: "POINT (18.057416919707752 59.435250488674491)"
            },
            LocationSignature: "xRnb"
          },
          {
            AdvertisedShortLocationName: "Åkersberga",
            Geometry: {
              SWEREF99TM: "POINT (686854 6598035)",
              WGS84: "POINT (18.299146775379395 59.479070910325561)"
            },
            LocationSignature: "xÅbg"
          },
          {
            AdvertisedShortLocationName: "Ringvägen",
            Geometry: {
              SWEREF99TM: "POINT (688109 6576244)",
              WGS84: "POINT (18.302195429914828 59.283151567965852)"
            },
            LocationSignature: "xRvä"
          },
          {
            AdvertisedShortLocationName: "Härnön",
            Geometry: {
              SWEREF99TM: "POINT (630541 6569525)",
              WGS84: "POINT (17.288701123568067 59.244555973346358)"
            },
            LocationSignature: "xHön"
          },
          {
            AdvertisedShortLocationName: "Igelboda",
            Geometry: {
              SWEREF99TM: "POINT (686548 6576923)",
              WGS84: "POINT (18.275430036381575 59.289930513751223)"
            },
            LocationSignature: "xIgb"
          },
          {
            AdvertisedShortLocationName: "Åkers Runö",
            Geometry: {
              SWEREF99TM: "POINT (685210 6598130)",
              WGS84: "POINT (18.270257405601821 59.480651297017744)"
            },
            LocationSignature: "xÅru"
          },
          {
            AdvertisedShortLocationName: "Saltsjöbaden",
            Geometry: {
              SWEREF99TM: "POINT (688749 6575814)",
              WGS84: "POINT (18.313033766495227 59.279011419619962)"
            },
            LocationSignature: "xSbn"
          },
          {
            AdvertisedShortLocationName: "Årstaberg",
            Geometry: {
              SWEREF99TM: "POINT (672397 6577311)",
              WGS84: "POINT (18.027693219158454 59.2994166097003)"
            },
            LocationSignature: "Åbe"
          },
          {
            AdvertisedShortLocationName: "Saltsjö-Duvnäs",
            Geometry: {
              SWEREF99TM: "POINT (682120 6577896)",
              WGS84: "POINT (18.19864428848485 59.300584934518255)"
            },
            LocationSignature: "xSdn"
          },
          {
            AdvertisedShortLocationName: "Sickla",
            Geometry: {
              SWEREF99TM: "POINT (677678 6578384)",
              WGS84: "POINT (18.121164786583147 59.306851383599756)"
            },
            LocationSignature: "xSik"
          },
          {
            AdvertisedShortLocationName: "Österskär",
            Geometry: {
              SWEREF99TM: "POINT (687626 6596095)",
              WGS84: "POINT (18.311047418607 59.461334443912953)"
            },
            LocationSignature: "xÖsk"
          },
          {
            AdvertisedShortLocationName: "Slussen",
            Geometry: {
              SWEREF99TM: "POINT (674890 6579692)",
              WGS84: "POINT (18.07333110181467 59.319743667860507)"
            },
            LocationSignature: "xSlu"
          },
          {
            AdvertisedShortLocationName: "Saltsjö-Järla",
            Geometry: {
              SWEREF99TM: "POINT (679299 6578465)",
              WGS84: "POINT (18.149657485372831 59.306893023851707)"
            },
            LocationSignature: "xSjl"
          },
          {
            AdvertisedShortLocationName: "Östberga",
            Geometry: {
              SWEREF99TM: "POINT (674491 6589068)",
              WGS84: "POINT (18.073931444756095 59.403985604310876)"
            },
            LocationSignature: "xÖga"
          },
          {
            AdvertisedShortLocationName: "Solsidan",
            Geometry: {
              SWEREF99TM: "POINT (687828 6574862)",
              WGS84: "POINT (18.29607324729065 59.270886266668768)"
            },
            LocationSignature: "xSln"
          },
          {
            AdvertisedShortLocationName: "Kragstalund",
            Geometry: {
              SWEREF99TM: "POINT (674046 6600904)",
              WGS84: "POINT (18.075738433408951 59.510304525293307)"
            },
            LocationSignature: "xKgl"
          },
          {
            AdvertisedShortLocationName: "Stockholms Östra",
            Geometry: {
              SWEREF99TM: "POINT (674581 6582676)",
              WGS84: "POINT (18.070325407863859 59.34662991319712)"
            },
            LocationSignature: "xÖst"
          },
          {
            AdvertisedShortLocationName: "Östervik",
            Geometry: {
              SWEREF99TM: "POINT (684249 6577390)",
              WGS84: "POINT (18.235536826198125 59.295125551457218)"
            },
            LocationSignature: "xÖsv"
          },
          {
            AdvertisedShortLocationName: "Kårsta",
            Geometry: {
              SWEREF99TM: "POINT (684085 6617709)",
              WGS84: "POINT (18.267415831880122 59.656678396850083)"
            },
            LocationSignature: "xKår"
          },
          {
            AdvertisedShortLocationName: "Stocksund",
            Geometry: {
              SWEREF99TM: "POINT (672877 6586866)",
              WGS84: "POINT (18.043772668457464 59.3849052920553)"
            },
            LocationSignature: "xSsu"
          },
          {
            AdvertisedShortLocationName: "Lindholmen",
            Geometry: {
              SWEREF99TM: "POINT (675562 6609224)",
              WGS84: "POINT (18.109357019599226 59.584275202441916)"
            },
            LocationSignature: "xLdm"
          },
          {
            AdvertisedShortLocationName: "Storängen",
            Geometry: {
              SWEREF99TM: "POINT (680916 6578396)",
              WGS84: "POINT (18.177954322624949 59.305585180546423)"
            },
            LocationSignature: "xStä"
          },
          {
            AdvertisedShortLocationName: "Tattby",
            Geometry: {
              SWEREF99TM: "POINT (686976 6575730)",
              WGS84: "POINT (18.281899946391484 59.279045636673196)"
            },
            LocationSignature: "xTab"
          },
          {
            AdvertisedShortLocationName: "Lahäll",
            Geometry: {
              SWEREF99TM: "POINT (674397 6591300)",
              WGS84: "POINT (18.074093088593884 59.424039235122578)"
            },
            LocationSignature: "xLhl"
          },
          {
            AdvertisedShortLocationName: "Tibble",
            Geometry: {
              SWEREF99TM: "POINT (673657 6593332)",
              WGS84: "POINT (18.062718201200035 59.442566787620095)"
            },
            LocationSignature: "xTbl"
          },
          {
            AdvertisedShortLocationName: "Lillängen",
            Geometry: {
              SWEREF99TM: "POINT (679979 6578300)",
              WGS84: "POINT (18.161444242312808 59.30512448060616)"
            },
            LocationSignature: "xLiä"
          },
          {
            AdvertisedShortLocationName: "Tippen",
            Geometry: {
              SWEREF99TM: "POINT (686682 6576280)",
              WGS84: "POINT (18.277223624061218 59.284106530851027)"
            },
            LocationSignature: "xTip"
          },
          {
            AdvertisedShortLocationName: "Ösmo",
            Geometry: {
              SWEREF99TM: "POINT (666805 6541950)",
              WGS84: "POINT (17.902643771807412 58.98451424987104)"
            },
            LocationSignature: "Öso"
          },
          {
            AdvertisedShortLocationName: "Östertälje",
            Geometry: {
              SWEREF99TM: "POINT (651885 6563678)",
              WGS84: "POINT (17.658394772630633 59.184989919946844)"
            },
            LocationSignature: "Öte"
          },
          {
            AdvertisedShortLocationName: "Älvsjö",
            Geometry: {
              SWEREF99TM: "POINT (671567 6574951)",
              WGS84: "POINT (18.011268352356289 59.278590231138971)"
            },
            LocationSignature: "Äs"
          },
          {
            AdvertisedShortLocationName: "Älvsjö godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (672044 6576364)",
              WGS84: "POINT (18.020750312361056 59.2910679753198)"
            },
            LocationSignature: "Äsg"
          },
          {
            AdvertisedShortLocationName: "Kvarnängen",
            Geometry: {
              SWEREF99TM: "POINT (668503 6535864)",
              WGS84: "POINT (17.927513716982958 58.929263989097976)"
            },
            LocationSignature: "Kng"
          },
          {
            AdvertisedShortLocationName: "Brunna",
            Geometry: {
              SWEREF99TM: "POINT (636027 6638465)",
              WGS84: "POINT (17.428941542129181 59.861356328250849)"
            },
            LocationSignature: "Bna"
          },
          {
            AdvertisedShortLocationName: "Bålsta",
            Geometry: {
              SWEREF99TM: "POINT (643031 6606187)",
              WGS84: "POINT (17.531884549633357 59.56943227548269)"
            },
            LocationSignature: "Bål"
          },
          {
            AdvertisedShortLocationName: "Dannemora",
            Geometry: {
              SWEREF99TM: "POINT (657882 6676656)",
              WGS84: "POINT (17.848019671309068 60.196093645075614)"
            },
            LocationSignature: "Dma"
          },
          {
            AdvertisedShortLocationName: "Ekolsund",
            Geometry: {
              SWEREF99TM: "POINT (633723 6610818)",
              WGS84: "POINT (17.370210482695857 59.614062634390081)"
            },
            LocationSignature: "Eko"
          },
          {
            AdvertisedShortLocationName: "Enköping",
            Geometry: {
              SWEREF99TM: "POINT (617735 6613682)",
              WGS84: "POINT (17.088656482917344 59.644579845608128)"
            },
            LocationSignature: "Ep"
          },
          {
            AdvertisedShortLocationName: "Ekeby",
            Geometry: {
              SWEREF99TM: "POINT (654689 6629785)",
              WGS84: "POINT (17.7553140479258 59.776942406174726)"
            },
            LocationSignature: "Eby"
          },
          {
            AdvertisedShortLocationName: "Grillby",
            Geometry: {
              SWEREF99TM: "POINT (625984 6612210)",
              WGS84: "POINT (17.233992978801197 59.62896063211938)"
            },
            LocationSignature: "Gib"
          },
          {
            AdvertisedShortLocationName: "Gimo",
            Geometry: {
              SWEREF99TM: "POINT (676617 6675264)",
              WGS84: "POINT (18.184191124633394 60.175932379539134)"
            },
            LocationSignature: "Gmo"
          },
          {
            AdvertisedShortLocationName: "Hargshamn",
            Geometry: {
              SWEREF99TM: "POINT (692654 6675321)",
              WGS84: "POINT (18.472778177759761 60.169190338454172)"
            },
            LocationSignature: "Hrm"
          },
          {
            AdvertisedShortLocationName: "Heby",
            Geometry: {
              SWEREF99TM: "POINT (603542 6646227)",
              WGS84: "POINT (16.853164760744242 59.940434496041263)"
            },
            LocationSignature: "Hy"
          },
          {
            AdvertisedShortLocationName: "Järlåsa",
            Geometry: {
              SWEREF99TM: "POINT (623296 6640658)",
              WGS84: "POINT (17.203120446229246 59.885027833296036)"
            },
            LocationSignature: "Jla"
          },
          {
            AdvertisedShortLocationName: "Järlebo",
            Geometry: {
              SWEREF99TM: "POINT (652287 6669539)",
              WGS84: "POINT (17.74190324047218 60.134390894972256)"
            },
            LocationSignature: "Jlo"
          },
          {
            AdvertisedShortLocationName: "Knivsta",
            Geometry: {
              SWEREF99TM: "POINT (656714 6624124)",
              WGS84: "POINT (17.78709920918859 59.725408895627695)"
            },
            LocationSignature: "Kn"
          },
          {
            AdvertisedShortLocationName: "Marma",
            Geometry: {
              SWEREF99TM: "POINT (633551 6708617)",
              WGS84: "POINT (17.430862057574931 60.491503781382292)"
            },
            LocationSignature: "Maa"
          },
          {
            AdvertisedShortLocationName: "Marma",
            Geometry: {
              SWEREF99TM: "POINT (633057 6707327)",
              WGS84: "POINT (17.421016802707587 60.480095151744059)"
            },
            LocationSignature: "Mrm"
          },
          {
            AdvertisedShortLocationName: "Mehedeby",
            Geometry: {
              SWEREF99TM: "POINT (632060 6704013)",
              WGS84: "POINT (17.400697523242322 60.450693948864419)"
            },
            LocationSignature: "Meh"
          },
          {
            AdvertisedShortLocationName: "Myrbacken",
            Geometry: {
              SWEREF99TM: "POINT (658020 6620679)",
              WGS84: "POINT (17.807702645844682 59.694016627623071)"
            },
            LocationSignature: "Myn"
          },
          {
            AdvertisedShortLocationName: "Lundby",
            Geometry: {
              SWEREF99TM: "POINT (608637 6614522)",
              WGS84: "POINT (16.927798317305335 59.654588773898396)"
            },
            LocationSignature: "Lub"
          },
          {
            AdvertisedShortLocationName: "Morgongåva",
            Geometry: {
              SWEREF99TM: "POINT (609611 6645563)",
              WGS84: "POINT (16.961361800787781 59.9329057877021)"
            },
            LocationSignature: "Må"
          },
          {
            AdvertisedShortLocationName: "Orrskog",
            Geometry: {
              SWEREF99TM: "POINT (632235 6698868)",
              WGS84: "POINT (17.400468969720666 60.404481960661791)"
            },
            LocationSignature: "Os"
          },
          {
            AdvertisedShortLocationName: "Samnan",
            Geometry: {
              SWEREF99TM: "POINT (648462 6644534)",
              WGS84: "POINT (17.655060740975056 59.911514935381284)"
            },
            LocationSignature: "Sam"
          },
          {
            AdvertisedShortLocationName: "Salsta",
            Geometry: {
              SWEREF99TM: "POINT (651939 6659735)",
              WGS84: "POINT (17.728363874288274 60.046588997281752)"
            },
            LocationSignature: "Sas"
          },
          {
            AdvertisedShortLocationName: "Storvreta",
            Geometry: {
              SWEREF99TM: "POINT (651119 6649635)",
              WGS84: "POINT (17.70624373515717 59.956302785355163)"
            },
            LocationSignature: "Srv"
          },
          {
            AdvertisedShortLocationName: "Skutskär",
            Geometry: {
              SWEREF99TM: "POINT (631558.2 6723541)",
              WGS84: "POINT (17.404550712054245 60.626036920231392)"
            },
            LocationSignature: "Sur"
          },
          {
            AdvertisedShortLocationName: "Skutskär norra",
            Geometry: {
              SWEREF99TM: "POINT (629645.8 6725145.5)",
              WGS84: "POINT (17.370689256465717 60.641053646503842)"
            },
            LocationSignature: "Surn"
          },
          {
            AdvertisedShortLocationName: "Skyttorp",
            Geometry: {
              SWEREF99TM: "POINT (652263 6663405)",
              WGS84: "POINT (17.7369006258753 60.079384892487)"
            },
            LocationSignature: "Syt"
          },
          {
            AdvertisedShortLocationName: "Uppsala",
            Geometry: {
              SWEREF99TM: "POINT (648345 6638550)",
              WGS84: "POINT (17.648693814369921 59.857881697817483)"
            },
            LocationSignature: "U"
          },
          {
            AdvertisedShortLocationName: "Vattholma",
            Geometry: {
              SWEREF99TM: "POINT (652177 6657351)",
              WGS84: "POINT (17.730865290008413 60.02511868161011)"
            },
            LocationSignature: "Vha"
          },
          {
            AdvertisedShortLocationName: "Skärpan",
            Geometry: {
              SWEREF99TM: "POINT (642368 6688505)",
              WGS84: "POINT (17.576853802163885 60.308089113351215)"
            },
            LocationSignature: "Säp"
          },
          {
            AdvertisedShortLocationName: "Säby",
            Geometry: {
              SWEREF99TM: "POINT (651496 6635465)",
              WGS84: "POINT (17.702637227405763 59.829068148399806)"
            },
            LocationSignature: "Säy"
          },
          {
            AdvertisedShortLocationName: "Uppsala norra",
            Geometry: {
              SWEREF99TM: "POINT (646262 6639501)",
              WGS84: "POINT (17.612216446551198 59.867154527317211)"
            },
            LocationSignature: "Una"
          },
          {
            AdvertisedShortLocationName: "Tierp",
            Geometry: {
              SWEREF99TM: "POINT (638685 6692565)",
              WGS84: "POINT (17.513066776528493 60.34578295707297)"
            },
            LocationSignature: "Tip"
          },
          {
            AdvertisedShortLocationName: "Tobo",
            Geometry: {
              SWEREF99TM: "POINT (645729 6683169)",
              WGS84: "POINT (17.6337596120473 60.259036019685695)"
            },
            LocationSignature: "Tbo"
          },
          {
            AdvertisedShortLocationName: "Fyrislund",
            Geometry: {
              SWEREF99TM: "POINT (650213 6638686)",
              WGS84: "POINT (17.682102807465331 59.858427026105161)"
            },
            LocationSignature: "xFl"
          },
          {
            AdvertisedShortLocationName: "Löt",
            Geometry: {
              SWEREF99TM: "POINT (664819 6640168)",
              WGS84: "POINT (17.943689544134624 59.866152267681962)"
            },
            LocationSignature: "xLöt"
          },
          {
            AdvertisedShortLocationName: "Almunge",
            Geometry: {
              SWEREF99TM: "POINT (670409 6641513)",
              WGS84: "POINT (18.044469400578777 59.875945507619221)"
            },
            LocationSignature: "xAlg"
          },
          {
            AdvertisedShortLocationName: "Moga",
            Geometry: {
              SWEREF99TM: "POINT (672167 6643785)",
              WGS84: "POINT (18.077709455026469 59.895588431425814)"
            },
            LocationSignature: "xMg"
          },
          {
            AdvertisedShortLocationName: "Marielund",
            Geometry: {
              SWEREF99TM: "POINT (661082 6637404)",
              WGS84: "POINT (17.8749046825506 59.842837837390014)"
            },
            LocationSignature: "xMl"
          },
          {
            AdvertisedShortLocationName: "Gunsta",
            Geometry: {
              SWEREF99TM: "POINT (658755 6638414)",
              WGS84: "POINT (17.834203816484763 59.852795645294066)"
            },
            LocationSignature: "xGa"
          },
          {
            AdvertisedShortLocationName: "Bärby",
            Geometry: {
              SWEREF99TM: "POINT (657686 6638852)",
              WGS84: "POINT (17.815478304564717 59.857132957117287)"
            },
            LocationSignature: "xB"
          },
          {
            AdvertisedShortLocationName: "Uppsala Östra",
            Geometry: {
              SWEREF99TM: "POINT (648388 6638550)",
              WGS84: "POINT (17.64946062121286 59.857866265083686)"
            },
            LocationSignature: "xUö"
          },
          {
            AdvertisedShortLocationName: "Faringe",
            Geometry: {
              SWEREF99TM: "POINT (674105 6646599)",
              WGS84: "POINT (18.114658699900897 59.920006289693745)"
            },
            LocationSignature: "xF"
          },
          {
            AdvertisedShortLocationName: "Funbo",
            Geometry: {
              SWEREF99TM: "POINT (660154 6638106)",
              WGS84: "POINT (17.858906554137764 59.849493917586017)"
            },
            LocationSignature: "xFb"
          },
          {
            AdvertisedShortLocationName: "Skölsta",
            Geometry: {
              SWEREF99TM: "POINT (653610 6640610)",
              WGS84: "POINT (17.744099388332536 59.874435370075751)"
            },
            LocationSignature: "xSa"
          },
          {
            AdvertisedShortLocationName: "Årsta",
            Geometry: {
              SWEREF99TM: "POINT (651338 6639376)",
              WGS84: "POINT (17.702666420281403 59.864205632680964)"
            },
            LocationSignature: "xÅs"
          },
          {
            AdvertisedShortLocationName: "Selknä",
            Geometry: {
              SWEREF99TM: "POINT (662917 6638896)",
              WGS84: "POINT (17.908774109095056 59.855499313538793)"
            },
            LocationSignature: "xSlä"
          },
          {
            AdvertisedShortLocationName: "Länna bruk",
            Geometry: {
              SWEREF99TM: "POINT (666280 6641465)",
              WGS84: "POINT (17.9707806436961 59.877197703938783)"
            },
            LocationSignature: "xLbr"
          },
          {
            AdvertisedShortLocationName: "Lövstahagen",
            Geometry: {
              SWEREF99TM: "POINT (661735 6637925)",
              WGS84: "POINT (17.886946736212263 59.847255404116495)"
            },
            LocationSignature: "xLh"
          },
          {
            AdvertisedShortLocationName: "Länna",
            Geometry: {
              SWEREF99TM: "POINT (665631 6640838)",
              WGS84: "POINT (17.95870357923155 59.871835839420825)"
            },
            LocationSignature: "xLna"
          },
          {
            AdvertisedShortLocationName: "Örbyhus",
            Geometry: {
              SWEREF99TM: "POINT (649721 6680018)",
              WGS84: "POINT (17.703482816120193 60.229325280792139)"
            },
            LocationSignature: "Öh"
          },
          {
            AdvertisedShortLocationName: "Älvboda",
            Geometry: {
              SWEREF99TM: "POINT (631734 6722659)",
              WGS84: "POINT (17.407170645142418 60.618067203019024)"
            },
            LocationSignature: "Äba"
          },
          {
            AdvertisedShortLocationName: "Älvkarleby",
            Geometry: {
              SWEREF99TM: "POINT (633134 6715739)",
              WGS84: "POINT (17.428060189184563 60.555529674134917)"
            },
            LocationSignature: "Äkb"
          },
          {
            AdvertisedShortLocationName: "Björnlunda",
            Geometry: {
              SWEREF99TM: "POINT (623541 6549344)",
              WGS84: "POINT (17.154658166569 59.065550410038206)"
            },
            LocationSignature: "B"
          },
          {
            AdvertisedShortLocationName: "Bälgviken",
            Geometry: {
              SWEREF99TM: "POINT (583297 6569101)",
              WGS84: "POINT (16.460636576860814 59.252678211310347)"
            },
            LocationSignature: "Bgv"
          },
          {
            AdvertisedShortLocationName: "Baggetorp",
            Geometry: {
              SWEREF99TM: "POINT (561163 6541610)",
              WGS84: "POINT (16.06491302338619 59.009615593399189)"
            },
            LocationSignature: "Bt"
          },
          {
            AdvertisedShortLocationName: "Barva",
            Geometry: {
              SWEREF99TM: "POINT (601963 6579665)",
              WGS84: "POINT (16.792764360140207 59.343415817433844)"
            },
            LocationSignature: "Bva"
          },
          {
            AdvertisedShortLocationName: "Enstaberga",
            Geometry: {
              SWEREF99TM: "POINT (606991 6513804)",
              WGS84: "POINT (16.849075264036287 58.751014164260674)"
            },
            LocationSignature: "Ebg"
          },
          {
            AdvertisedShortLocationName: "Eskilstuna",
            Geometry: {
              SWEREF99TM: "POINT (585559 6582152)",
              WGS84: "POINT (16.505455902288542 59.369387591614931)"
            },
            LocationSignature: "Et"
          },
          {
            AdvertisedShortLocationName: "Flen",
            Geometry: {
              SWEREF99TM: "POINT (590922 6547472)",
              WGS84: "POINT (16.585278232245919 59.056946593019575)"
            },
            LocationSignature: "Fle"
          },
          {
            AdvertisedShortLocationName: "Folkesta",
            Geometry: {
              SWEREF99TM: "POINT (580301 6585752)",
              WGS84: "POINT (16.414317837235856 59.402740779512925)"
            },
            LocationSignature: "Fok"
          },
          {
            AdvertisedShortLocationName: "Flens övre",
            Geometry: {
              SWEREF99TM: "POINT (591460 6547998)",
              WGS84: "POINT (16.594873300320689 59.061553559225658)"
            },
            LocationSignature: "Fsö"
          },
          {
            AdvertisedShortLocationName: "Gnesta",
            Geometry: {
              SWEREF99TM: "POINT (632674 6547755)",
              WGS84: "POINT (17.312841134340005 59.048549276804543)"
            },
            LocationSignature: "Gn"
          },
          {
            AdvertisedShortLocationName: "Grundbro",
            Geometry: {
              SWEREF99TM: "POINT (619747 6574277)",
              WGS84: "POINT (17.102236921191274 59.29039081077763)"
            },
            LocationSignature: "Gru"
          },
          {
            AdvertisedShortLocationName: "Högsjö",
            Geometry: {
              SWEREF99TM: "POINT (541469 6545852)",
              WGS84: "POINT (15.722857462745507 59.050072589442934)"
            },
            LocationSignature: "Hgö"
          },
          {
            AdvertisedShortLocationName: "Hälleforsnäs",
            Geometry: {
              SWEREF99TM: "POINT (585915 6559058)",
              WGS84: "POINT (16.50255929862843 59.161996462748569)"
            },
            LocationSignature: "Hnä"
          },
          {
            AdvertisedShortLocationName: "Hållsta",
            Geometry: {
              SWEREF99TM: "POINT (583078 6573835)",
              WGS84: "POINT (16.458614128862813 59.295220044401937)"
            },
            LocationSignature: "Hål"
          },
          {
            AdvertisedShortLocationName: "Härad",
            Geometry: {
              SWEREF99TM: "POINT (608767 6581376)",
              WGS84: "POINT (16.913184715386098 59.357073144968908)"
            },
            LocationSignature: "Häd"
          },
          {
            AdvertisedShortLocationName: "Katrineholm",
            Geometry: {
              SWEREF99TM: "POINT (569475 6540292)",
              WGS84: "POINT (16.209183647564291 58.996511678685145)"
            },
            LocationSignature: "K"
          },
          {
            AdvertisedShortLocationName: "Jönåker",
            Geometry: {
              SWEREF99TM: "POINT (599815 6512758)",
              WGS84: "POINT (16.724657928092789 58.743342573688565)"
            },
            LocationSignature: "Jår"
          },
          {
            AdvertisedShortLocationName: "Kjula",
            Geometry: {
              SWEREF99TM: "POINT (594508 6578785)",
              WGS84: "POINT (16.661367442087332 59.337252490019715)"
            },
            LocationSignature: "Kju"
          },
          {
            AdvertisedShortLocationName: "Kolke",
            Geometry: {
              SWEREF99TM: "POINT (627013 6548663)",
              WGS84: "POINT (17.214767447065974 59.058419572652227)"
            },
            LocationSignature: "Koe"
          },
          {
            AdvertisedShortLocationName: "Kvicksund",
            Geometry: {
              SWEREF99TM: "POINT (574877 6590991)",
              WGS84: "POINT (16.320647961765943 59.450774679861105)"
            },
            LocationSignature: "Ksus"
          },
          {
            AdvertisedShortLocationName: "Läggesta",
            Geometry: {
              SWEREF99TM: "POINT (623710 6569630)",
              WGS84: "POINT (17.169099180406807 59.24754847952218)"
            },
            LocationSignature: "Lg"
          },
          {
            AdvertisedShortLocationName: "Malmby",
            Geometry: {
              SWEREF99TM: "POINT (616785 6580147)",
              WGS84: "POINT (17.053451514841651 59.343899341696144)"
            },
            LocationSignature: "Mby"
          },
          {
            AdvertisedShortLocationName: "Lästringe",
            Geometry: {
              SWEREF99TM: "POINT (634168 6528482)",
              WGS84: "POINT (17.327172745542079 58.875140834592493)"
            },
            LocationSignature: "Lre"
          },
          {
            AdvertisedShortLocationName: "Nyckelsjön",
            Geometry: {
              SWEREF99TM: "POINT (606969 6551327)",
              WGS84: "POINT (16.866786287292225 59.087827412096082)"
            },
            LocationSignature: "Nsj"
          },
          {
            AdvertisedShortLocationName: "Mellösa",
            Geometry: {
              SWEREF99TM: "POINT (589338 6552325)",
              WGS84: "POINT (16.559647789038589 59.100847589362409)"
            },
            LocationSignature: "Mlö"
          },
          {
            AdvertisedShortLocationName: "Oxelösund",
            Geometry: {
              SWEREF99TM: "POINT (621785 6505271)",
              WGS84: "POINT (17.099949191978347 58.670512239456521)"
            },
            LocationSignature: "Oxd"
          },
          {
            AdvertisedShortLocationName: "Nybybruk",
            Geometry: {
              SWEREF99TM: "POINT (582803 6588118)",
              WGS84: "POINT (16.459282015508744 59.423495961324484)"
            },
            LocationSignature: "Nbr"
          },
          {
            AdvertisedShortLocationName: "Nyköping",
            Geometry: {
              SWEREF99TM: "POINT (615535 6514673)",
              WGS84: "POINT (16.997084943083745 58.75661275367473)"
            },
            LocationSignature: "Nk"
          },
          {
            AdvertisedShortLocationName: "Strängnäs",
            Geometry: {
              SWEREF99TM: "POINT (615260 6583042)",
              WGS84: "POINT (17.028206598634636 59.3702999656302)"
            },
            LocationSignature: "Sgs"
          },
          {
            AdvertisedShortLocationName: "Nyköping södra",
            Geometry: {
              SWEREF99TM: "POINT (615777 6513679)",
              WGS84: "POINT (17.000752309621905 58.747626269926464)"
            },
            LocationSignature: "Nks"
          },
          {
            AdvertisedShortLocationName: "Skanlog",
            Geometry: {
              SWEREF99TM: "POINT (582054 6586100)",
              WGS84: "POINT (16.445314694769007 59.405526758583285)"
            },
            LocationSignature: "Snl"
          },
          {
            AdvertisedShortLocationName: "Stjärnhov",
            Geometry: {
              SWEREF99TM: "POINT (614920 6551010)",
              WGS84: "POINT (17.00528336867815 59.082912614046933)"
            },
            LocationSignature: "Sh"
          },
          {
            AdvertisedShortLocationName: "Silinge",
            Geometry: {
              SWEREF99TM: "POINT (589965 6542478)",
              WGS84: "POINT (16.566558595964707 59.012317134739433)"
            },
            LocationSignature: "Sii"
          },
          {
            AdvertisedShortLocationName: "Sparreholm",
            Geometry: {
              SWEREF99TM: "POINT (604819 6549930)",
              WGS84: "POINT (16.828620214429925 59.075822223116731)"
            },
            LocationSignature: "Sp"
          },
          {
            AdvertisedShortLocationName: "Rekarne",
            Geometry: {
              SWEREF99TM: "POINT (576073 6588438)",
              WGS84: "POINT (16.34082857433631 59.427640059359177)"
            },
            LocationSignature: "Rke"
          },
          {
            AdvertisedShortLocationName: "Stolpstugan",
            Geometry: {
              SWEREF99TM: "POINT (577157 6542175)",
              WGS84: "POINT (16.343503947215989 59.012100756745205)"
            },
            LocationSignature: "Spn"
          },
          {
            AdvertisedShortLocationName: "Skogstorp",
            Geometry: {
              SWEREF99TM: "POINT (583829 6577931)",
              WGS84: "POINT (16.4733846209059 59.331842555940774)"
            },
            LocationSignature: "Skrp"
          },
          {
            AdvertisedShortLocationName: "Skebokvarn",
            Geometry: {
              SWEREF99TM: "POINT (598495 6548595)",
              WGS84: "POINT (16.717755282048962 59.065346388483583)"
            },
            LocationSignature: "Skv"
          },
          {
            AdvertisedShortLocationName: "Sjösa",
            Geometry: {
              SWEREF99TM: "POINT (621192 6517697)",
              WGS84: "POINT (17.096430406735053 58.782202300882012)"
            },
            LocationSignature: "Ssa"
          },
          {
            AdvertisedShortLocationName: "Strångsjö",
            Geometry: {
              SWEREF99TM: "POINT (569013 6530217)",
              WGS84: "POINT (16.198003964139417 58.906125626239479)"
            },
            LocationSignature: "Stö"
          },
          {
            AdvertisedShortLocationName: "Sköldinge",
            Geometry: {
              SWEREF99TM: "POINT (583467 6544328)",
              WGS84: "POINT (16.45415369808121 59.030244230381648)"
            },
            LocationSignature: "Sde"
          },
          {
            AdvertisedShortLocationName: "Vagnhärad",
            Geometry: {
              SWEREF99TM: "POINT (643765 6536707)",
              WGS84: "POINT (17.49878397536677 58.945834700227039)"
            },
            LocationSignature: "Vhd"
          },
          {
            AdvertisedShortLocationName: "Tystberga",
            Geometry: {
              SWEREF99TM: "POINT (629016 6525340)",
              WGS84: "POINT (17.236070652701297 58.848522060712575)"
            },
            LocationSignature: "Tba"
          },
          {
            AdvertisedShortLocationName: "VME",
            Geometry: {
              SWEREF99TM: "POINT (582093 6586133)",
              WGS84: "POINT (16.446014019975404 59.405815401145425)"
            },
            LocationSignature: "Vme"
          },
          {
            AdvertisedShortLocationName: "Vingåker",
            Geometry: {
              SWEREF99TM: "POINT (550295 6545070)",
              WGS84: "POINT (15.876508044889901 59.042101764679089)"
            },
            LocationSignature: "Vr"
          },
          {
            AdvertisedShortLocationName: "Vrena",
            Geometry: {
              SWEREF99TM: "POINT (598299 6525983)",
              WGS84: "POINT (16.704290020129495 58.862410504368214)"
            },
            LocationSignature: "Vre"
          },
          {
            AdvertisedShortLocationName: "Mariefred",
            Geometry: {
              SWEREF99TM: "POINT (626510 6570972)",
              WGS84: "POINT (17.218934355225702 59.25876387594888)"
            },
            LocationSignature: "xMfd"
          },
          {
            AdvertisedShortLocationName: "Mariefreds ångbåtsstation",
            Geometry: {
              SWEREF99TM: "POINT (626895 6570830)",
              WGS84: "POINT (17.225598082708178 59.257374408781338)"
            },
            LocationSignature: "xMfå"
          },
          {
            AdvertisedShortLocationName: "Marielund",
            Geometry: {
              SWEREF99TM: "POINT (624675 6570224)",
              WGS84: "POINT (17.186346447888777 59.252595917785463)"
            },
            LocationSignature: "xMln"
          },
          {
            AdvertisedShortLocationName: "Gripsholmsviken",
            Geometry: {
              SWEREF99TM: "POINT (625883 6570823)",
              WGS84: "POINT (17.207859994540851 59.257613717601636)"
            },
            LocationSignature: "xGhn"
          },
          {
            AdvertisedShortLocationName: "Hedlandet",
            Geometry: {
              SWEREF99TM: "POINT (627317 6569541)",
              WGS84: "POINT (17.232236307193496 59.245680901166018)"
            },
            LocationSignature: "xHdt"
          },
          {
            AdvertisedShortLocationName: "Värdshuset",
            Geometry: {
              SWEREF99TM: "POINT (626683 6570880)",
              WGS84: "POINT (17.221912298683208 59.257886576159962)"
            },
            LocationSignature: "xVht"
          },
          {
            AdvertisedShortLocationName: "Hjorthagen",
            Geometry: {
              SWEREF99TM: "POINT (625552 6570708)",
              WGS84: "POINT (17.201992968372984 59.256680040461546)"
            },
            LocationSignature: "xHhn"
          },
          {
            AdvertisedShortLocationName: "Ålberga",
            Geometry: {
              SWEREF99TM: "POINT (591344 6510404)",
              WGS84: "POINT (16.577401419812951 58.724083639244775)"
            },
            LocationSignature: "Åba"
          },
          {
            AdvertisedShortLocationName: "Jagbacken",
            Geometry: {
              SWEREF99TM: "POINT (624558 6569712)",
              WGS84: "POINT (17.184002396565969 59.24803578067138)"
            },
            LocationSignature: "xJbn"
          },
          {
            AdvertisedShortLocationName: "Läggesta nedre",
            Geometry: {
              SWEREF99TM: "POINT (624004 6569487)",
              WGS84: "POINT (17.174168067621 59.24617924200534)"
            },
            LocationSignature: "xLgn"
          },
          {
            AdvertisedShortLocationName: "Åkers styckebruk",
            Geometry: {
              SWEREF99TM: "POINT (619480 6570019)",
              WGS84: "POINT (17.095204229938588 59.252253971901951)"
            },
            LocationSignature: "Åks"
          },
          {
            AdvertisedShortLocationName: "Sjöbygget",
            Geometry: {
              SWEREF99TM: "POINT (628309 6569474)",
              WGS84: "POINT (17.249573844889159 59.24478033749007)"
            },
            LocationSignature: "xSöy"
          }
        ]
      }
    ]
  }
}

let locations

export default () => {
  const [result] = raw.RESPONSE.RESULT
  if (!locations) {
    locations = {}
    result.TrainStation.forEach(obj => {
      const match = /POINT \(([.\d]+) ([.\d]+)\)/.exec(obj.Geometry.WGS84)
      if (match) {
        const [, east, north] = match
        locations[obj.LocationSignature] = { east, north, ...obj }
      }
    })
  }
  return locations
}
