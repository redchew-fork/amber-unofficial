define([
    './helpers',
    './compatibility', // pre-fetch, dep of ./boot
    './kernel-fundamentals', // pre-fetch, dep of ./boot
    './kernel-language', // pre-fetch, dep of ./boot
    './boot', // pre-fetch, dep of ./helpers
    // --- packages of the core Amber begin here ---
    'amber_core/Kernel-Objects',
    'amber_core/Kernel-Classes',
    'amber_core/Kernel-Methods',
    'amber_core/Kernel-Collections',
    'amber_core/Kernel-Dag',
    'amber_core/Kernel-Infrastructure',
    'amber_core/Kernel-Promises',
    'amber_core/Kernel-Exceptions',
    'amber_core/Kernel-Announcements',
    'amber_core/Platform-Services',
    'amber/Platform'
    // --- packages of the core Amber end here ---
], function (amber) {
    return amber;
});
