/*
 *	By Guller Yuri @ GullerYA
 */
(function() {
	'use strict';
	var initialized=false,db;

	function init(dbNamespace,callback) {
		if(!indexedDB) throw new Error('InDBFS: IndexedDB not found');
		if(typeof dbNamespace!=='string'||!dbNamespace) throw new Error('InDBFS: invalid DB namespace');
		var r=indexedDB.open(dbNamespace);
		r.onerror=callback;
		r.onsuccess=function() {
			//	Metacode
			if(r.result.objectStoreNames.contains(dbNamespace)) {
				initialized=true;
				callback();
			}
		}
	}

	function requestFileSystem() {
		throw new Error('InDBFS: not implemented');
	}

	function resolveLocalFileSystemURL() {
		throw new Error('InDBFS: not implemented');
	}

	Object.defineProperty(self,'InDBFS',{ value: {} });
	Object.defineProperties(
		self.InDBFS,
		{
			init: { value: init,enumerable: true },
			initialized: { get: function() { return initialized; } },
			TEMPORARY: { value: 0,enumerable: true },
			PERSISTENT: { value: 1,enumerable: true },
			requestFileSystem: { value: requestFileSystem,enumerable: true },
			resolveLocalFileSystemURL: { value: resolveLocalFileSystemURL,emunerable: true }
		});
})();