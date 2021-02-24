exports.mod = () => {
	let settings = require( "../settings.json" );
	if ( settings.unlockHideout === true ) {
		base = fileIO.readParsed( db.user.cache.hideout_areas );
		for ( let file in base.data ) {
			let filedata = base.data[file];
			for ( let stage in filedata.stages ) {
				filedata.stages[stage].requirements = [];
			}
		}
		fileIO.write( db.user.cache.hideout_areas, base );
		logger.logSuccess( "[HideoutUnlock] Hideout upgrade requirements have been removed." );
	}
}