const raw_names = "Neutress Koundbudash Laxion Thoxxor Cragxmor Sraja Ivrek Duboko Silma Lukne Mina Purvygraple Stle Lach Poldo Sniano Winge Amblassum Raistnuch Wort Wildcred Planiggsbit Ress Heossa Crokka Rood Chemage Elly Azod Trowwoo Cron Atino Cresse Swakey Kandist Golder Piterry Ions Bushousano Trooset Dyel Trinte Bitton Herry Pinsyv Prinkbirch Busaness Oleed Bircharlice Flytarch Rivysmon Roset Screed Reezedoak Rhubab Wint Mapluiton Jacroot Harsed Scorry Swins Catonans Rosemapple Wholle Cotainort Amblanalde Holl Mirry Cort Worn Deroak Aspbwoot Nese Miggsil Hemulbood Blark Sumpino Prash Vilver Sumewort"
const area_type = "Region Sector Dune Territory Zone Field Land Realm Shire Locale Expanse"
var _names
var _area_type

var w_size 			= ["Minor" , "Major", "Small", "Large", "Important", "Forgotten", "Unknown", "Renowned", "Heretic"]
var w_condition = ["Desolate", "Wrecked", "Pristine", "Demolished", "Raided", "Defaced", "Intact", "Untouched", "Burnt"]


function generateMapName() {
	_names = raw_names.split(' ')
	_area_type = area_type.split(' ')
	return (random(_names) + " " + random(_area_type))
	//return (random(_names))
}