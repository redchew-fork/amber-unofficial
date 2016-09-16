(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.brikz = f()}})(function(){var define,module,exports;
function Brikz(api, apiKey, initKey) {
    var brikz = this, backup = {};
    apiKey = apiKey || 'exports';
    initKey = initKey || '__init__';

    function mixin(src, target, what) {
        for (var keys = Object.keys(what || src), l = keys.length, i = 0; i < l; ++i) {
            if (src == null) {
                target[keys[i]] = undefined;
            } else {
                var value = src[keys[i]];
                if (typeof value !== "undefined") {
                    target[keys[i]] = value;
                }
            }
        }
        return target;
    }

    Object.defineProperties(this, {
        rebuild: {value: null, enumerable: false, configurable: true, writable: true}
    });
    var exclude = mixin(this, {});

    this.rebuild = function () {
        Object.keys(backup).forEach(function (key) {
            mixin(null, api, (backup[key] || 0)[apiKey] || {});
        });
        var oapi = mixin(api, {}), order = [], chk = {};

        function ensure(key) {
            if (key in exclude) {
                return null;
            }
            var b = brikz[key], bak = backup[key];
            mixin(null, api, api);
            while (typeof b === "function") {
                (b.deps || []).forEach(ensure);
                b = new b(brikz, api, bak);
            }
            brikz[key] = b;
            if (b && !chk[key]) {
                chk[key] = true;
                order.push(b);
            }
            if (b && !b[apiKey]) {
                b[apiKey] = mixin(api, {});
            }
        }

        Object.keys(brikz).forEach(ensure);
        mixin(oapi, mixin(null, api, api));
        order.forEach(function (brik) {
            mixin(brik[apiKey] || {}, api);
        });
        order.forEach(function (brik) {
            if (brik[initKey]) brik[initKey]();
        });
        backup = mixin(brikz, {});
    };
}

return Brikz;

});