import log from 'electron-log';

log.transports.file.maxSize = 5 * 1024 * 1024; // 5 MB per log file
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}';

log.transports.console.format = '[{level}] {text}';

export default log;
