define([
    './helpers',
    './boot', // pre-fetch, dep of ./helpers
    // --- packages of the core Amber begin here ---
    'amber_core/Kernel-Helpers',
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
    // --- packages of the core Amber end here ---
], function (amber) {
    return amber;
});