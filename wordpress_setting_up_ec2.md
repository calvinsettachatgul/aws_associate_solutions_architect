setting up ec2 
------------------------------

point dns to elastic load balancer 

building fault tolerant wordpress site lab 2 setting up ec2 
sudo su 
yum update -y 
yum install php php-mysql stress -y

httpd.conf file 
change from None to All

allow url rewrites 
serve images from cloudfront rather than s3
create healthy.html 

wget https://wordpress.org/latest.tar.gz

tar -xzf latest.tar.gz

cp -r wordpress/* /var/www/html  

***

rm -rf wordpress

rm -rf latest.tar.gz

permissions 

chmod -R 755 wp-content 
chown -R apache.apache wp-content

service httpd start 

chkconfig httpd on

#!/bin/bash
yum update -y
yum install httpd php php-mysql stress -y
cd /etc/httpd/conf
cp httpd.conf httpdconfbackup.conf
rm -rf httpd.conf
wget https://s3-eu-west-1.amazonaws.com/acloudguru-wp/httpd.conf
cd /var/www/html
echo "healthy" > healthy.html
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
cp -r wordpress/* /var/www/html/
rm -rf wordpress
rm -rf latest.tar.gz
chmod -R 755 wp-content
chown -R apache:apache wp-content
service httpd start
chkconfig httpd on
****

Sorry, but I can’t write the wp-config.php file.

You can create the wp-config.php file manually and paste the following text into it.

<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'acloudguru');

/** MySQL database username */
define('DB_USER', 'acloudguru');

/** MySQL database password */
define('DB_PASSWORD', 'acloudguru');

/** MySQL hostname */
define('DB_HOST', 'acloudguru.ctovgnsasx1o.us-east-1.rds.amazonaws.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=NjoDHU]67b*Mo%/$ksA|;a~1TFV@E8QP~<Q7mAh~gh#tqo/0Is#mB-9CfUqKO_X');
define('SECURE_AUTH_KEY',  's fVkObFkT3[4AS``6ZCDM%_mf|PE5_Df&cH zetw>g^>nLNDHG+mF8t0v.)sEbo');
define('LOGGED_IN_KEY',    '!_9hL17 h6RtU03v1O#^}BQrm`X]JF+zJ@UQhD&e-/O9dndb)`-+K6|%/z0Zq.T1');
define('NONCE_KEY',        'y(/|SDNz/ENlS>z1diTnVG^Ph.3]kL3#zf:}91<F@.G&r$ctpuek(@rqtb9QkNZx');
define('AUTH_SALT',        'A&Vh?)]M5:++dFXs<LSQw]`c;H&jsdW#6ij8}u~m&<2#Y-9XWpzZK@;N%q@pyXZf');
define('SECURE_AUTH_SALT', 'U >-_;qm!cZ]-4T:xG1egSI:aCAM_qMMg>[JFq/ZU(3{BaX95uL  I2gc&,YDi~&');
define('LOGGED_IN_SALT',   '>718K<t>^+7SLD3afK?{8.mur$iF7YY9Z-{?PyIZ(vjN9_/z>@&MwgE`:-IKc:o ');
define('NONCE_SALT',       '6Sv.0 |s2/7N<h1d,.cV3!8`8f lmV$PfSZ1iYVHJ|%WC}$>[LJ!2S4bxy[z$)mS');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');



