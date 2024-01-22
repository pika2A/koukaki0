<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Z*Rn86td%||ow927N_2%;5#~s;9/d`i{`:]z(M[rc]C_DmM]|+$=!/`&WvL=VT d' );
define( 'SECURE_AUTH_KEY',   'pHH)3t|$-p6f.byGX@J|Z]J~!%+huW1Rwl!lEc:1%8<rE,8M b|v,:%rmXC}w[4<' );
define( 'LOGGED_IN_KEY',     'vj1Z{7ttxZ&tzmtdhcjg_LGTub^xS`P`BV%dAJCfgb1s!U;w?g&;C/8-t6_+k~Z)' );
define( 'NONCE_KEY',         'G;PYTSU+0?:L0DhVCRFK|8xgwIj;f4[::Kht#{b<KB{+in;6Oi+]y`u}wyzO&MXF' );
define( 'AUTH_SALT',         'y}Io-Z2BTy|0=q@Y|.]%a||t_#@J59W!]qP+wGY`[`*T[`q9{E,7!eSNQQ62cCAj' );
define( 'SECURE_AUTH_SALT',  '/fsWZ.~B*C6N*[wXaR1$1[QE8(.)]gsSq`ob$v/B:NWygxB!DHI]&^*@s?lE`=,7' );
define( 'LOGGED_IN_SALT',    'TravoT#7`|?tV[6#i,0)SY2lvfXdhgEoSH/Rpf{.?py/95} h|yWw=M?EEonw?`e' );
define( 'NONCE_SALT',        'FDWKC&8ag+deIb[Q*QkoXuY~2K0-?b3{AYb2!VZI[u_-:@X|~lgYjN%u1)u~dyvg' );
define( 'WP_CACHE_KEY_SALT', '7=nBhVoAnIV;zGT*8-bFiJ1l8>cw|xx^;|@fInq!ljK`1a j83)Z$cS`l~)xhV!%' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
