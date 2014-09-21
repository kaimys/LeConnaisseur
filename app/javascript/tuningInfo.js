var tuningInfo = {
	'71': {
		sourceName: 'Das Erste',
		onid: '1',
		tsid: '1',
		sid: '1'
	},
	'40': {
		sourceName: 'ProSieben',
		onid: '1',
		tsid: '1',
		sid: '2'
	},
	'58': {
		sourceName: 'Arte',
		onid: '1',
		tsid: '1',
		sid: '3'
	},
	'694': {
		sourceName: 'Sixx',
		onid: '1',
		tsid: '1',
		sid: '4'
	},
	'37': {
		sourceName: 'ZDF',
		onid: '1',
		tsid: '1',
		sid: '5'
	}
};


/**
 * Example:
 * 
 * switchChannel(tuningInfo[sourceId]);
 * 
 * @param t
 * @returns new channel object
 */
function switchChannel(t) {
	if (vidObj) {
		try {
			c = vidObj.getChannelConfig().channelList
					.getChannelByTriplet(t.onid, t.tsid, t.sid);
		} catch (e) {
			// TODO log error
		}
		try {
			c = vidObj.createChannelObject(Channel.ID_DVB_C || 0,
					t.onid, t.tsid, t.sid);
		} catch (e) {
			// TODO log error
		}
		if (c) {
			vidObj.setChannel(c, true);
			return c;
		}
	}
}