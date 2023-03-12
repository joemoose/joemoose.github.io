/*
name, verbs

verbs -> items
*/

var lex = {}
lex.cultures 	= ["Mycomorphs", "Synths", "Cacogènes"]
lex.location  = ["Settlement", "Trade Post", "Oasis",
									"Vault", "Temple", "Archive", "Arcology Dome", "Spaceship",
									"Mystic Abode", "Fort", "Castle", "Research Center"]

lex.occupy		= ["occupied", "used", "visited", "owned", "defended", "worshipped", "burned"]
lex.verbs 		= ["collect", "worship", "trade", "study", "craft"] //research

lex["Settlement"] = ["trade", "craft", "collect"]
lex["Trade Post"] = ["trade", "farm"]
lex["Oasis"] 			= ["trade", "worship", "farm"]
lex["Vault"]			= ["hide", "protect"]
lex["Temple"]			= ["worship"]
lex["Archive"]		= ["protect", "trade", "collect"]
lex["Spaceship"] 	= ["hide", "trade"]
lex["Fort"] 			= ["protect", "farm"]
lex["Castle"] 		= ["protect"]
lex["Arcology Dome"] 		= ["study", "farm"]
lex["Research Center"] 	= ["study"]
lex["Mystic Abode"] 		= ["worship", "study"]

lex.collect 	= ["books", "figurines", "electronic devices", "memory crystals", "telescopes", "tooths", "maps", "poems"]
lex.worship 	= ["Nekeddy", "Antimeres", "a nameless daugther", "Azathoth, the Deamon Sultan", "TITAN MNEMOSYM", "a Void Saint", "a Fungal Saint", "the Pale Faith of Amun-oh"]
lex.trade 		= ["crystals", "knowledge", "rare tokens", "water", "fungus", "electronic devices", "tools", "medecine", "exotica", "dried fish", "flower", "synth parts"]
lex.study 		= ["fogotten gods", "biomutations", "hypergeometry", "planetary phenomenons", "immortality", "telepathy", "time travel", "time paradox", "synth psycology"]
lex.craft 		= ["knives", "pots", "vessel", "carpets", "shoes", "clothes", "bags", "cheese", "instruments", "pottery"]
lex.farm			= ["algae", "fruits", "honey", "spores", "embryos", "insects", "eggs", "corn", "olives", "avocados", "salt", "flowers"]
lex.hide			= ["???", "¤¤¤¤¤¤¤¤"]
lex.protect 	= ["something secret", "heirlooms", "art", "jewellery", "prophet", "memory crystals"]


lex.landAdj 	= ["arid", "barren", "swampy", "poisonous", "treacherous", "harsh", "humid", "lush", "colorful", "rich", "fungal", "hazy"]
lex.landType 	= ["dune", "crevasse", "sand tundra"]
lex.direction = ["middle", "center", "upper", "southern", "eastern", "western", "northern"]


//random facts

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
