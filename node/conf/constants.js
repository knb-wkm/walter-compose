// ファイル一覧 1pageあたりの件数
export const FILE_LIMITS_PER_PAGE = 30;
export const SWIFT_CONTAINER_NAME = "walter";

// ファイル暗号化設定
export const CRYPTO_PASSWORD = "mGjQB5F57C+W";
export const USE_CRYPTO = true;

// お知らせの取得件数
export const INFOMATION_LIMITS_PER_PAGE = 5;

// label等の文字列最大長さ
export const MAX_STRING_LENGTH = 255;

// email addressの制限文字数
export const MAX_EMAIL_LENGTH = 64;

// loggerの設定
export const LOGGER_CONFIG = {
  appenders: {
    default: {
      type:     "dateFile",
      filename: "logs/app.log",
      pattern:  "-yyyy-MM-dd",
      layout:{
        type: "pattern",
        pattern: "[%d] [%p] %h - %m"
      }
    },
    production: {
      type:     "dateFile",
      filename: "logs/app.log",
      pattern:  "-yyyy-MM-dd",
      layout:{
        type: "pattern",
        pattern: "[%d] [%p] %h - %m"
      }
    }
  },
  categories:{
    default: {
      appenders:['default'],
      level: 'ALL'
    },
    production: {
      appenders:['production'],
      level: 'error'
    }
  }
};

// 禁止文字一覧
// 使い方: string.match( new RegExp(ILLIGAL_CHARACTERS.join("|")))
export const ILLIGAL_CHARACTERS = ["\\\\", "\\/", "\\:", "\\*", "\\?", "\\<", "\\>", "\\|"];

// 権限(file)
export const PERMISSION_VIEW_LIST = "list";
export const PERMISSION_VIEW_DETAIL = "detail";
export const PERMISSION_VIEW_HISTORY = "history";
export const PERMISSION_DOWNLOAD = "download";
export const PERMISSION_CHANGE_NAME = "change-name";
export const PERMISSION_CHANGE_TAG = "change-tag";
export const PERMISSION_CHANGE_META_INFO = "change-meta-info";
export const PERMISSION_UPLOAD = "upload";
export const PERMISSION_MAKE_DIR = "makedir";
export const PERMISSION_MOVE = "move";
export const PERMISSION_COPY = "copy";
export const PERMISSION_RESTORE = "restore";
export const PERMISSION_DELETE = "delete";
export const PERMISSION_REVERT = "revert";
export const PERMISSION_AUTHORITY = "authority";

// 権限(menu)
export const PERMISSION_META_INFOS = "meta_infos";
export const PERMISSION_GROUPS = "groups";
export const PERMISSION_HOME = "home";
export const PERMISSION_FILES = "files";
export const PERMISSION_USERS = "users";
export const PERMISSION_TAGS = "tags";
export const PERMISSION_ROLE_FILES = "role_files";
export const PERMISSION_ROLE_MENUS = "role_menus";
export const PERMISSION_ANALYSIS = "analysis";
