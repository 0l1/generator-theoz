/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    design
 * @package     default_modern
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/* Reset ================================================================================= */
* { margin:0; padding:0; }

body          { background:#f2f2f2 url(../images/bkg_body.gif) 0 0 repeat; font:11px/1.55 arial, helvetica, sans-serif; color:#444; text-align:center; }

img           { border:0; vertical-align:top; }

a             { color:#4f8100; text-decoration:none; }
a:hover       { text-decoration:underline; }
:focus        { outline:0; }

/* Headings */
h1          { font-size:2em; font-weight:normal; line-height:1.15; }
h2          { font-size:1.5em; line-height:1.25; margin-bottom:.45em; }
h3          { font-size:1.35em; line-height:1.25; margin-bottom:.45em; }
h4          { font-size:1.05em; line-height:1.35; margin-bottom:.45em; }
h5          { font-size:1.05em; line-height:1.35; margin-bottom:.45em; }
h6          { font-size:1em; line-height:1.35; margin-bottom:1em; }

/* Forms */
form          { display:inline; }
fieldset      { border:0; }
legend        { display:none; }

/* Table */
table         { border:0; /*border-collapse:collapse;*/ border-spacing:0; empty-cells:show; font-size:100%; }
caption,th,td { vertical-align:top; text-align:left; font-weight:normal; }

/* Content */
p             { margin:0 0 1em; }
strong        { font-weight:bold; }
address       { font-style:normal; line-height:1.35; }
cite          { font-style:normal; }
q,
blockquote    { quotes:none; }
q:before,
q:after       { content:''; }
small         { font-size:1em; }
big           { font-size:1.15em; }
/*sup           { font-size:1em; vertical-align:top; }*/

/* Lists */
ul,ol         { list-style:none; }

/* Tools */
.hidden       { display:block !important; border:0 !important; margin:0 !important; padding:0 !important; font-size:0 !important; line-height:0 !important; width:0 !important; height:0 !important; overflow:hidden !important; }
.nobr         { white-space:nowrap !important; }
.wrap         { white-space:normal !important; }
.a-left       { text-align:left !important; }
.a-center     { text-align:center !important; }
.a-right      { text-align:right !important; }
.v-top        { vertical-align:top; }
.v-middle     { vertical-align:middle; }
.f-left,
.left         { float:left !important; }
.f-right,
.right        { float:right !important; }
.f-none       { float:none !important; }
.f-fix        { float:left; width:100%; }
.no-display   { display:none; }
.no-margin    { margin:0 !important; }
.no-padding   { padding:0 !important; }
.no-bg        { background:none !important; }
/* ======================================================================================= */


/* Layout ================================================================================ */
.wrapper {}
.page { width:960px; margin:15px auto 0; text-align:left; }
.page-print { background:#fff; padding:25px 30px; text-align:left; }
.page-empty { background:#fff; padding:20px; text-align:left; }
.page-popup { background:#fff; padding:25px 30px; text-align:left; }
.main-container {}
.main { background:#fff; border:1px solid #bbb; border-top:0; border-bottom-color:#666; padding:16px 16px 50px; min-height:350px; }

/* Base Columns */
.col-left { float:left; width:220px; padding:0 0 1px; }
.col-main { float:left; width:686px; padding:0 0 1px; }
.col-right { float:right; width:220px; padding:0 0 1px; }

/* 1 Column Layout */
.col1-layout .main { padding:16px 30px 40px; }
.col1-layout .col-main { float:none; width:auto; }

/* 2 Columns Layout */
.col2-left-layout .col-main { float:right; }
.col2-right-layout .col-main {}

/* 3 Columns Layout */
.col3-layout .col-main { width:452px; }
.col3-layout .col-wrapper { float:left; width:689px; }
.col3-layout .col-wrapper .col-main { float:right; }

/* Content Columns */
.col2-set .col-1 { float:left; width:48.5%; }
.col2-set .col-2 { float:right; width:48.5%; }
.col2-set .col-narrow { width:32%; }
.col2-set .col-wide { width:65%; }

.col3-set .col-1 { float:left; width:32%; }
.col3-set .col-2 { float:left; width:32%; margin-left:2%; }
.col3-set .col-3 { float:right; width:32%; }

.col4-set .col-1 { float:left; width:23.5%; }
.col4-set .col-2 { float:left; width:23.5%; margin:0 2%; }
.col4-set .col-3 { float:left; width:23.5%; }
.col4-set .col-4 { float:right; width:23.5%; }
/* ======================================================================================= */


/* Global Styles ========================================================================= */
/* Form Elements */
input,select,textarea,button { font:12px/15px Arial, Helvetica, sans-serif; vertical-align:middle; color:#2f2f2f; }
input.input-text,select,textarea { background:#fff; border:1px solid #b6b6b6; }
input.input-text,textarea { padding:2px; }
select { padding:1px; }
select option { padding-right:10px; }
select.multiselect option { border-bottom:1px solid #b6b6b6; padding:1px 5px; }
select.multiselect option:last-child { border-bottom:0; }
textarea { overflow:auto; }
input.radio { margin-right:3px; }
input.checkbox { margin-right:3px; }
input.qty { width:2.5em !important; }
button.button::-moz-focus-inner { padding:0; border:0; } /* FF Fix */
button.button { -webkit-border-fit:lines; } /* <- Safari & Google Chrome Fix */
button.button { overflow:visible; width:auto; border:0; padding:0; margin:0; background:transparent; cursor:pointer; }
button.button span { float:left; height:28px; background:transparent url(../images/bkg_btn.png) 0 0 no-repeat; padding:0 0 0 6px; font:bold 11px/25px Tahoma, Verdana, Arial, sans-serif; text-transform:uppercase; text-align:center; white-space:nowrap; color:#555; }
button.button span span { background-position:100% 0; padding:0 15px 0 9px; }
button.disabled span { color:#bbb !important; }

/*button.btn-cart span {}*/
button.btn-checkout span { height:28px; border:0; background-image:url(../images/btn_checkout.gif); padding:0 0 0 6px; font:bold 12px/26px Arial, Helvetica, sans-serif; color:#fff; }
button.btn-checkout span span { padding:0 40px 0 34px; }
button.btn-checkout.no-checkout span { background-position:0 100%; color:#cfcfcf; }
button.btn-checkout.no-checkout span span { background-position:100% 100%; }

p.control input.checkbox,
p.control input.radio { margin-right:6px; }
/* Form Highlight */
/*input.input-text:focus,select:focus,textarea:focus { background-color:#edf7fd; }*/
/*.highlight { background:#efefef; }*/

/* Form lists */
/* Grouped fields */
/*.form-list { width:535px; margin:0 auto; overflow:hidden; }*/
.form-list li { margin:0 0 6px; }
.form-list label { float:left; color:#555; font-weight:bold; position:relative; z-index:0; }
.form-list label.required {}
.form-list label.required em { float:right; font-style:normal; color:#eb340a; position:absolute; top:0; right:-7px; }
.form-list li.control label { float:none; }
.form-list li.control input.radio,
.form-list li.control input.checkbox { margin-top:-1px; margin-right:4px; }
.form-list li.control .input-box { clear:none; display:inline; width:auto; }
/*.form-list li.fields { margin-right:-15px; }*/
.form-list .input-box { display:block; clear:both; width:260px; }
.form-list .field { float:left; width:275px; }
.form-list input.input-text { width:254px; }
.form-list textarea { width:254px; height:10em; }
.form-list select { width:260px; }
.form-list li.wide .input-box { width:535px; }
.form-list li.wide input.input-text { width:529px; }
.form-list li.wide textarea { width:529px; }
.form-list li.wide select { width:535px; }
.form-list li.additional-row { border-top:1px solid #ccc; margin-top:10px; padding-top:7px; }
.form-list li.additional-row .btn-remove { float:right; margin:5px 0 0; }
.form-list .input-range input.input-text { width:74px; }

.form-list-narrow li  { margin-bottom:0; }
.form-list-narrow li .input-box { margin-bottom:6px; }
.form-list-narrow li.wide .input-box { width:260px; }
.form-list-narrow li.wide input.input-text,
.form-list-narrow li.wide textarea { width:254px }
.form-list-narrow li.wide select { width:260px; }

/* Customer */
.form-list .customer-name-prefix .input-box,
.form-list .customer-name-suffix .input-box,
.form-list .customer-name-prefix-suffix .input-box,
.form-list .customer-name-prefix-middlename .input-box,
.form-list .customer-name-middlename-suffix .input-box,
.form-list .customer-name-prefix-middlename-suffix .input-box { width:auto; }

.form-list .name-prefix { width:65px; }
.form-list .name-prefix select { width:55px; }
.form-list .name-prefix input.input-text { width:49px; }

.form-list .name-suffix { width:65px; }
.form-list .name-suffix select { width:55px; }
.form-list .name-suffix input.input-text { width:49px; }

.form-list .name-middlename { width:70px; }
.form-list .name-middlename input.input-text { width:49px; }

.form-list .customer-name-prefix-middlename-suffix .name-firstname,
.form-list .customer-name-prefix-middlename .name-firstname { width:140px; }
.form-list .customer-name-prefix-middlename-suffix .name-firstname input.input-text,
.form-list .customer-name-prefix-middlename .name-firstname input.input-text { width:124px; }
.form-list .customer-name-prefix-middlename-suffix .name-lastname { width:205px; }
.form-list .customer-name-prefix-middlename-suffix .name-lastname input.input-text { width:189px; }

.form-list .customer-name-prefix-suffix .name-firstname { width:210px; }
.form-list .customer-name-prefix-suffix .name-lastname { width:205px; }
.form-list .customer-name-prefix-suffix .name-firstname input.input-text,
.form-list .customer-name-prefix-suffix .name-lastname input.input-text { width:189px; }

.form-list .customer-name-prefix-suffix .name-firstname { width:210px; }
.form-list .customer-name-prefix-suffix .name-lastname { width:205px; }
.form-list .customer-name-prefix-suffix .name-firstname input.input-text,
.form-list .customer-name-prefix-suffix .name-lastname input.input-text { width:189px; }

.form-list .customer-name-prefix .name-firstname,
.form-list .customer-name-middlename .name-firstname { width:210px; }

.form-list .customer-name-suffix .name-lastname,
.form-list .customer-name-middlename .name-firstname,
.form-list .customer-name-middlename-suffix .name-firstname,
.form-list .customer-name-middlename-suffix .name-lastname { width:205px; }

.form-list .customer-name-prefix .name-firstname input.input-text,
.form-list .customer-name-suffix .name-lastname input.input-text,
.form-list .customer-name-middlename .name-firstname input.input-text,
.form-list .customer-name-middlename-suffix .name-firstname input.input-text,
.form-list .customer-name-middlename-suffix .name-lastname input.input-text { width:189px; }

.form-list .customer-dob .dob-month,
.form-list .customer-dob .dob-day,
.form-list .customer-dob .dob-year { float:left; width:85px; }
.form-list .customer-dob input.input-text { display:block; width:74px; }
.form-list .customer-dob label { font-size:10px; font-weight:normal; color:#888; }
.form-list .customer-dob .dob-day,
.form-list .customer-dob .dob-month { width:60px; }
.form-list .customer-dob .dob-day input.input-text,
.form-list .customer-dob .dob-month input.input-text { width:46px; }
.form-list .customer-dob .dob-year { width:140px; }
.form-list .customer-dob .dob-year input.input-text { width:134px; }

.buttons-set { clear:both; margin:4em 0 0; padding:8px 0 0; border-top:1px solid #e4e4e4; text-align:right; }
.buttons-set p.required { margin:0 0 10px; }
.buttons-set .back-link { float:left; margin:0; }
.buttons-set button.button { float:right; margin-left:5px; }

.buttons-set-order { margin:10px 0 0; }
.buttons-set-order .please-wait { padding:5px 7px 0 0; }

.fieldset { margin:0 10px 25px; }
.fieldset .legend { margin:0 -10px 12px; background:#f1f1f1; padding:2px 10px; font-size:13px; line-height:1.25; }

/* Form Validation */
.validation-advice { clear:both; min-height:13px; margin:3px 0 0; padding-left:13px; font-size:11px; line-height:13px; background:url(../images/validation_advice_bg.gif) 2px 3px no-repeat; color:#eb340a; }
.validation-failed { border:1px solid #eb340a !important; background:#faebe7 !important; }
.validation-passed {}
p.required { font-size:11px; text-align:right; color:#EB340A; }
/* Expiration date and CVV number validation fix */
.v-fix { float:left; }
.v-fix .validation-advice { display:block; width:12em; margin-right:-12em; position:relative; }

/* Global Messages  */
.success { color:#3d6611; font-weight:bold; }
.error { color:#df280a; font-weight:bold; }
.notice { color:#e26703; }

.messages,
.messages ul { list-style:none !important; margin:0 !important; padding:0 !important; }
.messages { width:100%; overflow:hidden; }
.messages li { margin:0 0 10px !important; }
.messages li li { margin:0 0 3px !important; }
.error-msg,
.success-msg,
.note-msg,
.notice-msg { border-style:solid !important; border-width:1px !important; padding:4px 12px !important; font-size:11px !important; font-weight:bold !important; }
.error-msg { border-color:#f16048; background-color:#faebe7; color:#df280a; }
.success-msg { border-color:#446423; background-color:#eff5ea; color:#3d6611; }
.note-msg,
.notice-msg { border-color:#fcd344; background-color:#fafaec; color:#3d6611; }

/* BreadCrumbs */
.breadcrumbs a { color:#7f7f7f; }
.breadcrumbs li { display:inline; }
.breadcrumbs li strong { font-weight:bold; }

/* Page Heading */
.page-title { width:100%; overflow:hidden; margin:0 0 16px; }
.page-title h1,
.page-title h2 { font-size:23px; font-weight:normal; }
.page-title .separator { margin:0 3px; }
.page-title .link-rss { float:right; margin:7px 0 0; }
.title-buttons { text-align:right; }
.title-buttons h1,
.title-buttons h2,
.title-buttons h3,
.title-buttons h4,
.title-buttons h5,
.title-buttons h6 { float:left; }

.subtitle,
.sub-title { clear:both; padding:12px 0 0; font-size:16px; font-weight:bold; margin:0 0 6px; }

/* Pager */
.pager { font-size:11px; background:#fff url(../images/bkg_toolbar.gif) 0 100% repeat-x; padding:4px 8px; border-top:1px solid #ddd; text-align:center; }
.pager .amount { float:left; margin:0; }
.pager .limiter { float:right; }
.pager .limiter label { vertical-align:middle; }
.pager .limiter select { padding:0; margin:0 0 1px; vertical-align:middle; }
.pager .pages { margin:0 140px; }
.pager .pages ol { display:inline; }
.pager .pages li { display:inline; margin:0 2px; }
.pager .pages .current {}

/* Sorter */
.sorter { font-size:11px; background:#fff url(../images/bkg_toolbar.gif) 0 100% repeat-x; padding:3px 8px; border-top:1px solid #ddd; }
.sorter .view-mode { float:left; margin:0; }
.sorter .sort-by { float:right; padding-right:36px; }
.sorter .sort-by label { vertical-align:middle; }
.sorter .sort-by select { padding:0; margin:0 0 1px; vertical-align:middle; }
.sorter .link-feed {}

/* Toolbar */
.toolbar {}
.toolbar .pager { padding:3px 8px; }
.toolbar .sorter {}
.toolbar-bottom {}

/* Data Table */
.data-table { width:100%; }
.data-table tr.odd  { background:#fff }
.data-table tr.even { background:#fcfcfc; }
.data-table tr.last th,
.data-table tr.last td { border-bottom:0 !important; }
.data-table th { padding:2px 8px; font-size:10px; text-transform:uppercase; white-space:nowrap; }
.data-table th.wrap { white-space:normal; }
.data-table th a { color:#fff; }
.data-table td { padding:3px 8px; }

.data-table thead,
.data-table thead tr { background:#e9e9e9; }

.data-table tfoot { border-bottom:1px solid #d9dde3; }
.data-table tfoot tr { background-color:#f3f3f3 !important; }
.data-table tbody th { padding:3px 8px; font-size:11px; font-weight:bold; text-transform:none; white-space:normal; }
.data-table tbody th,
.data-table tbody td { border-bottom:1px solid #d9dde3; }
.data-table tfoot strong { font-size:14px; }
/* Bundle products tables */
.data-table tbody.odd tr { background:#fff; }
.data-table tbody.even tr { background:#fcfcfc; }
.data-table tbody.odd tr td,
.data-table tbody.even tr td { border-bottom:0; }
.data-table tbody.odd tr.border td,
.data-table tbody.even tr.border td { border-bottom:1px solid #d9dde3; }

.data-table tbody td .option-label { font-weight:bold; font-style:italic; }
.data-table tbody td .option-value { padding-left:10px; }

/* Generic Info Box */
.info-box { margin:0 0 15px; }
.info-box h2 { font-size:13px; font-weight:bold; border-bottom:1px solid #ddd; margin:0 0 8px; }

.info-table th { font-weight:bold; padding:2px 15px 2px 0; }
.info-table td { padding:2px 0; }

/* Shopping cart total summary row expandable to details */
tr.summary-total { cursor:pointer; }
tr.summary-total td {}
tr.summary-total .summary-collapse { float:right; text-align:right; padding-left:20px; background:url(../images/bkg_collapse.gif) 0 4px no-repeat; cursor:pointer; }
tr.show-details .summary-collapse { background-position:0 -53px; }
tr.show-details td {}
tr.summary-details td { background-color:#dae1e4; color:#626465; }
tr.summary-details-first td { border-top:1px solid #d2d8db; }
tr.summary-details-excluded { font-style:italic; }

/* Shopping cart tax info */
.cart-tax-info { display:block; }
.cart-tax-info,
.cart-tax-info .cart-price { padding-right:20px; }
.cart-tax-total { display:block; padding-right:20px; background:url(../images/bkg_collapse.gif) 100% 4px no-repeat; cursor:pointer; }
.cart-tax-info .price,
.cart-tax-total .price { display:inline !important; font-weight:normal !important; }
.cart-tax-total-expanded { background-position:100% -53px; }

/* Class: std - styles for admin-controlled content */
.std .subtitle { padding:0; }
.std ol.ol { list-style:decimal outside; padding-left:1.5em; }
.std ul.disc { list-style:disc outside; padding-left:18px; margin:0 0 10px; }
.std dl dt { font-weight:bold; }
.std dl dd { margin:0 0 10px; }
.std ul,
.std ol,
.std dl,
.std p,
.std address,
.std blockquote { margin:0 0 1em; padding:0; }
.std ul { list-style:disc outside; padding-left:1.5em; }
.std ol { list-style:decimal outside; padding-left:1.5em; }
.std ul ul { list-style-type:circle; }
.std ul ul,
.std ol ol,
.std ul ol,
.std ol ul { margin:.5em 0; }
.std dt { font-weight:bold; }
.std dd { padding:0 0 0 1.5em; }
.std blockquote { font-style:italic; padding:0 0 0 1.5em; }
.std address { font-style:normal; }
.std b,
.std strong { font-weight:bold; }
.std i,
.std em { font-style:italic; }

/* Misc */
.links li { display:inline; }
.links li.first { padding-left:0 !important; }
.links li.last { background:none !important; padding-right:0 !important; }

.link-cart { font-weight:bold; color:#d62502; }
.link-wishlist { color:#444; }
.link-reorder {}
.link-compare {}
.link-print { /*background:url(../images/i_print.gif) 0 2px no-repeat; padding:3px 0 3px 25px;*/ }
.link-rss { background:url(../images/i_rss.gif) 0 1px no-repeat; padding-left:18px; line-height:14px; white-space:nowrap; }
.btn-remove { display:block; width:12px; height:12px; font-size:0; line-height:0; background:url(../images/btn_remove.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }
.btn-previous { display:block; width:12px; height:12px; font-size:0; line-height:0; background:url(../images/btn_previous.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }
.btn-remove2 { display:block; width:16px; height:16px; font-size:0; line-height:0; background:url(../images/btn_trash.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }
.btn-edit    { display:block; width:12px; height:12px; font-size:0; line-height:0; background:url(../images/btn_edit.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }

.cards-list dt { margin:5px 0 0; }
.cards-list .offset { padding:2px 0 2px 20px; }

.separator { margin:0 3px; }

.divider { clear:both; display:block; font-size:0; line-height:0; height:1px; background:#ccc; margin:10px 0; text-indent:-999em; overflow:hidden; }

/* Global site notices */
.global-site-notice { border:1px solid #cfcfcf; border-width:0 0 1px; background:#ffff90; font-size:12px; line-height:1.25; text-align:center; color:#2f2f2f; }
.global-site-notice .notice-inner { width:860px; margin:0 auto; padding:12px 0 12px 80px; background:url(../images/i_notice.gif) 20px 25px no-repeat; text-align:left; }
.global-site-notice .notice-inner p { margin:0; border:1px dotted #cccc73; padding:10px; }
.global-site-notice .notice-inner .actions { padding-top:10px; }

/* Cookie Notice */
.notice-cookie { }

/* Noscript Notice */
.noscript {}

/* Demo Notice */
.demo-notice { margin:0; padding:6px 10px; background:#d75f07; font-size:12px; line-height:1.15; border:0; text-align:center; color:#fff; }
.demo-notice .notice-inner { width:auto; padding:0; background:none; text-align:center; }
.demo-notice .notice-inner p { padding:0; border:0; }

/* ======================================================================================= */


/* Header ================================================================================ */
.logo { float:left; }
.header-container {}

.header { margin:0 0 12px; }
.header .logo { float:left; text-decoration:none !important; }
.header .logo strong { position:absolute; top:-999em; left:-999em; width:0; height:0; font-size:0; line-height:0; text-indent:-999em; overflow:hidden; }

.header .top-promo { float:left; width:117px; height:30px; margin:12px 10px 0; background:url(../images/bkg_top-promo.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }

.quick-access { background:#444; color:#fff; padding:7px 13px; text-align:right; }
.quick-access .welcome-msg { display:inline; margin:0; color:#fff; }
.quick-access .welcome-msg a { color:#ddd; }
.quick-access .form-language { float:left; }
.quick-access .form-language label { font-weight:bold; padding-right:5px; color:#fff; vertical-align:middle; }
.quick-access .form-language select { padding:0; }
.quick-access .form-language select.flags option { background-position:4px 50%; background-repeat:no-repeat; padding-left:25px; }
.quick-access .links { padding-left:8px; }
.quick-access .links,
.quick-access .links li { display:inline; }
.quick-access .links li { padding:0 4px 0 1px; }
.quick-access .links a { color:#ddd; }
.quick-access .links a { padding:0 7px 0 0; background:url(../images/bkg_pipe1.gif) no-repeat 100% 50%; }
.quick-access .links li.last a { padding:0; background:none; }

.top-bar { padding:3px 12px 2px 12px; border:1px solid #bbb; border-bottom-color:#dedede; background:#efefef; line-height:21px; }
.top-bar .breadcrumbs { float:left; width:580px; overflow:hidden; }
.form-search { float:right; }
.form-search label { float:left; font-size:12px; font-weight:bold; padding:0 5px 0 0; }
.form-search input.input-text { float:left; width:212px; margin-right:5px; }
.form-search button.button { float:left; }
.form-search button.button span { height:23px; background-image:url(../images/bkg_btn-small.png); line-height:21px; }
.form-search .search-autocomplete { z-index:999; }
.form-search .search-autocomplete ul { border:1px solid #999; background-color:#f9f5f0; }
.form-search .search-autocomplete li { text-align:left; border-bottom:1px solid #f4eee7; padding:2px 8px 1px 8px; cursor:pointer; }
.form-search .search-autocomplete li .amount { float:right; font-weight:bold; }
.form-search .search-autocomplete li.odd { background-color:#f6f6f6; }
.form-search .search-autocomplete li.selected { background-color:#ecf9ea; }

.header-container .top-container { padding:5px 12px; background:#fff; border:1px solid #bbb; border-width:0 1px 1px; text-align:right; }

/********** < Navigation */
.nav-container {}
#nav { float:left; margin:15px 0 0 15px; font-size:12px; }

/* All Levels */ /* Style consistent throughout all nav levels */
#nav li { position:relative;text-transform:uppercase; text-align:left;	}
#nav li.over { z-index:998; }
#nav a,
#nav a:hover { display:block; line-height:1.3em; text-decoration:none; }
#nav span { display:block; cursor:pointer; white-space:nowrap; }
#nav li ul span {white-space:normal; }

/* 0 Level */
#nav li { float:left; margin:1px 8px 11px 1px; padding:3px 8px; }
#nav li.active a { color:#444; }
#nav a { float:left; background:url(../images/bkg_nav_top.gif) no-repeat 100% 50%; padding-right:11px; color:#444; font-weight:bold; }
#nav li.over a,
#nav a:hover { color:#444; }
#nav li.over,
#nav li.active { margin:0 7px 10px 0; border:1px solid #bbb; background:#ececec; }

/* 1st Level */
#nav ul li,
#nav ul li.active,
#nav ul li.over { float:none; border:none; background:none; margin:0; padding:0; padding-bottom:1px; text-transform:none; }
#nav ul li.parent { background:url(../images/bkg_nav_parent.gif) no-repeat 100% 50%; }
#nav ul li.last { padding-bottom:0; }
#nav ul li.active { margin:0; border:0; background:none; }
#nav ul a,
#nav ul a:hover { float:none; padding:0; background:none; }
#nav ul li a { font-weight:normal !important; }

/* 2nd Level */
#nav ul,
#nav div { position:absolute; width:15em; top:22px; left:-10000px; border:1px solid #bbb; border-bottom:2px solid #999; padding:3px 8px; background:#fcfcfc; font-size:11px; }
#nav div ul { position:static; width:auto; border:none; padding:0; }

/* 3rd+ Level */
#nav ul ul,
#nav ul div { top:5px; }

#nav ul li a { padding:3px 0; color:#444 !important; }
#nav ul li a:hover { padding:3px 0; color:#5a7f00 !important; }

/* Show menu */
#nav li ul.shown-sub,
#nav li div.shown-sub { left:-1px; z-index:999; }
#nav li .shown-sub ul.shown-sub,
#nav li .shown-sub li div.shown-sub { left:100px; }
/********** Navigation > */
/* ======================================================================================= */


/* Sidebar =============================================================================== */
.block { border:1px solid #ddd; margin:0 0 20px; line-height:1.35; }
.block .block-title { border-bottom:1px solid #ddd; background:#e7e7e7; padding:2px 10px; }
.block .block-title strong { display:block; font:bold 12px/1.5 Arial, Helvetica, sans-serif; text-transform:uppercase; color:#444; }
.block .block-title strong span {}
.block .block-title a { text-decoration:none !important; }
.block .block-subtitle { font-size:10px; margin:0 0 10px; padding:0 0 2px; border-bottom:1px solid #ddd; text-transform:uppercase; }
.block .block-content { background:#f6f6f6; padding:12px 10px; }
.block .block-content li.item { border-bottom:1px solid #ddd; padding-bottom:5px; margin-bottom:5px; }
.block .block-content li.item.last { border-bottom:0; padding-bottom:0; margin-bottom:0; }
.block .block-content .product-name { color:#4f8100; }
.block .btn-remove,
.block .btn-edit { float:right; margin:1px 0 2px 5px; }
.block .actions { border-top:1px solid #ddd; padding:5px 0 0; margin:5px 0 0; text-align:right; }
.block .actions a { float:left; }
.block .actions button.button { float:right; }
.block .empty { margin:0; }
.block .price-box { margin:5px 0; }
.block button.button span { height:23px; background-image:url(../images/bkg_btn-small.png); line-height:20px; }

/*.block li.odd { background-color:#f4f3f3; }
.block li.even { background-color:#fafafa; }*/

/* Mini Products List */
.mini-products-list .product-image { float:left; width:50px; border:1px solid #a9a9a9; }
.mini-products-list .product-details { margin-left:60px; }
.block-cart .mini-products-list .product-details .product-name,
.block-cart .mini-products-list .product-details .nobr small { word-wrap:break-word; }
.block-cart .mini-products-list .product-details .nobr { white-space:normal !important; }

/* Block: Account */
.block-account .block-title { border:0; background:#666; }
.block-account .block-title strong { color:#fff; }
.block-account .block-content li a { display:block; border-bottom:1px solid #ddd; padding:3px 0; color:#5f5d5c; text-decoration:none !important; }
.block-account .block-content li a:hover { color:#444; }
.block-account .block-content li.last a { border-bottom:0; }
.block-account .block-content li.current { border-bottom:1px solid #ddd; padding:3px 0; }
.block-account .block-content li.current.last { border-bottom:0; }

/* Block: Currency Switcher */
.block-currency { background:#f4f4f4; }
.block-currency .block-title { border:0; background:none; padding:7px 10px 2px; text-transform:none; }
.block-currency .block-title strong { text-transform:none; }
.block-currency .block-content { padding:0 10px 12px; }
.block-currency .block-content select { width:100%; padding:0; }

/* Block: Layered Navigation */
.block-layered-nav { border:0; }
.block-layered-nav .block-title { border:0; padding:0; margin:0 0 6px; height:13px; background:url(../images/bkg_block-layered-title.gif) 0 0 no-repeat; text-indent:-999em; overflow:hidden; }
.block-layered-nav .block-content { padding:0; }
.block-layered-nav .block-subtitle { margin:0; background:#679100; font-size:12px; font-weight:bold; padding:2px 10px; color:#fff; }
.block-layered-nav dt { font-weight:bold; border-top:1px solid #fff; padding:8px 10px 0 10px; font-size:12px; }
.block-layered-nav dd { padding:0 10px 8px 10px; border-bottom:1px solid #ddd; }
.block-layered-nav dd li { line-height:1.35; margin:0 0 3px; }
.block-layered-nav dd a { color:#444; }
.block-layered-nav .currently ol { padding:6px 0 0; }
.block-layered-nav .currently li { padding:2px 36px 2px 10px; position:relative; z-index:1; }
.block-layered-nav .currently .label { font-weight:bold; display:inline-block; vertical-align:top; }
.block-layered-nav .currently .value { display:inline-block; vertical-align:top; }
.block-layered-nav .currently .btn-previous,
.block-layered-nav .currently .btn-remove { position:absolute; right:8px; top:3px; margin:0; }
.block-layered-nav .currently .btn-previous { right:22px; }
.block-layered-nav .actions { padding:5px 10px; margin:0; }
.block-layered-nav .actions a { float:none; }

/* Block: Cart */
.block-cart .block-title { background:#679100; }
.block-cart .block-title strong { color:#fff; }
.block-cart .summary { background:#e5eed6; padding:8px; margin:-12px -10px 8px; text-align:center; position:relative; z-index:1; }
.block-cart .amount { margin:0; }
.block-cart .amount a { font-weight:bold; }
.block-cart .subtotal { background:url(../images/bkg_subtotal.gif) no-repeat 50% 0; margin:5px 0 0; line-height:23px; }
.block-cart .subtotal .price { font-weight:bold; }
.block-cart .actions { display:none !important; }
.block-cart .actions .paypal-logo { float:left; width:100%; margin:3px 0 0; text-align:right; }

/* Block: Wishlist */
.block-wishlist .actions { text-align:right; }
.block-wishlist .actions a { float:none; }

/* Block: Related */
.block-related .block-subtitle { font-size:11px; font-weight:bold; border:0; padding:0; margin:0 0 8px; text-transform:none; }
.block-related input.checkbox { float:right; }
.block-related .product { margin-right:20px; }

/* Block: Compare Products */
.page-popup .link-print { background:url(../images/i_print.gif) 0 2px no-repeat; padding:3px 0 3px 25px; }
.compare-table { border:0; }
.compare-table thead,
.compare-table thead tr.first { background:#fff; }
.compare-table thead tr.first th,
.compare-table thead tr.first td { border:0; background:none; padding:0 0 4px; font-size:0; line-height:0; }
.compare-table .btn-remove { float:right; background-image:url(../images/btn_remove.gif); width:12px; height:12px; }
.compare-table tbody th { background:#e9e9e9; }
.compare-table tbody th,
.compare-table tbody td { padding:10px; border:0; border-top:1px solid #ccc; border-left:1px solid #ccc; }
.compare-table tbody td.last { border-right:1px solid #ccc; }
.compare-table tbody tr.last th,
.compare-table tbody tr.last td { border-bottom:1px solid #ccc !important; }
.compare-table tr.add-to-row td { background:#fffada; text-align:center; }
.compare-table tr.first td { text-align:center; }
.compare-table tr.first td .product-name { font-size:13px; font-weight:bold; margin:0 0 5px; color:#203548; }
.compare-table tr.first td .product-name a { color:#203548; }
.compare-table tr.first td .ratings { width:69px; margin:0 auto; }
.compare-table tr.first td p,
.compare-table tr.add-to-row td p { margin:0; }
.compare-table .add-to-links li { background:none; padding:0; }

/* Block: Recently Viewed */
.block-viewed {}

/* Block: Recently Compared */
.block-compared {}

/* Block: Poll */
.block-poll .block-subtitle { font-size:12px; }
.block-poll label { color:#777; font-weight:bold; }
.block-poll input.radio { float:left; margin:1px -18px 0 0; }
.block-poll .label { display:block; margin-left:18px; }
.block-poll li { padding:3px 9px; }
.block-poll .actions { margin:5px 0 0; }
.block-poll .answer { font-weight:bold; }
.block-poll .votes { float:right; margin-left:10px; }

/* Block: Tags */
.block-tags .block-content .tags-list { border:0; background:none; padding:0; }
.block-tags .block-content li a { color:#444; }
.block-tags .actions { text-align:right; }
.block-tags .actions a { float:none; }

/* Block: Reorder */
.block-reorder input.checkbox { float:left; margin:2px -20px 0 0; }
.block-reorder .product-name { margin-left:20px; }
.block-reorder .validation-advice { margin:3px 9px 7px; }

/* Block: Banner */
.block-banner { border:0; }
.block-banner .block-content { padding:0; background:none; text-align:center; }

/* Block: Login */
.block-login .block-content { padding:5px 10px; }
.block-login label { font-weight:bold; color:#555; }
.block-login input.input-text { display:block; width:167px; margin:3px 0; }
.block-login .actions { background:none; padding:0; margin:3px 0 0; }

/* Paypal */
.sidebar .paypal-logo { display:block; margin:10px 0; text-align:center; }
.sidebar .paypal-logo a { float:none; }
/* ======================================================================================= */


/* Category Page ========================================================================= */
.category-title { margin:0 0 7px; }
.category-title h1 { padding:3px 0; color:#5b9400; font-size:1.6em; font-weight:bold; line-height:1.25; }
.category-image { width:100%; overflow:hidden; margin:0 0 10px; text-align:center; }
.category-image img {}
.category-description { margin:0 0 10px; }
.category-products {}

/* View Type: Grid */
.products-grid { position:relative; }
.products-grid.last { border-bottom:0; }
.products-grid li.item { float:left; width:171px; padding:0 0 90px; }
.products-grid .product-image { display:block; width:170px; height:170px; border:1px solid #ddd; border-width:1px 1px 1px 0; margin:0 0 10px; }
.products-grid.first .product-image { border-top:0; }
.products-grid li.last .product-image { border-right:0; }
.products-grid .product-name { font-size:12px; margin:0 0 6px; }
.products-grid .product-name a { color:#444; text-decoration:underline; }
.products-grid .product-name a:hover { text-decoration:none; }
.products-grid .price-box { margin:5px 0; }
.products-grid .availability { line-height:21px; }
.products-grid .actions { position:absolute; bottom:20px; }
.col2-left-layout .products-grid,
.col2-right-layout .products-grid { width:684px; margin:0 auto; }
.col1-layout .products-grid,
.page-empty .products-grid { width:684px; margin:0 auto; }

/* View Type: List */
.products-list li.item { border-bottom:1px solid #d9ddd3; padding:12px 10px; }
.products-list li.item.last { border-bottom:0; }
.products-list .product-shop { margin-left:185px; }
.products-list .product-image { float:left; width:170px; height:170px; margin:0 0 10px; }
.products-list .product-name { font-size:12px; margin:0 0 6px; }
.products-list .product-name a { color:#444; text-decoration:underline; }
.products-list .product-name a:hover { text-decoration:none; }
.products-list .price-box { float:left; margin:4px 13px 0 0; }
.products-list .availability { float:left; margin:3px 0 0; }
.products-list .desc { clear:both; padding:6px 0 0; margin:0 0 13px; line-height:1.35; }
.products-list .add-to-links { clear:both; }
/* ======================================================================================= */


/* Product View ========================================================================== */
/* Rating */
.no-rating { margin:0; }

.ratings { line-height:1.25; margin:7px 0; }
.ratings strong { float:left; margin:0 3px 0 0; }
.ratings .rating-links { margin:0; }
.ratings .rating-links .separator { margin:0 2px; }
.ratings dt {}
.ratings dd {}
.rating-box { width:50px; height:10px; font-size:0; line-height:0; background:url(../images/bkg_rating.gif) 0 0 repeat-x; text-indent:-999em; overflow:hidden; }
.rating-box .rating { float:left; height:10px; background:url(../images/bkg_rating.gif) 0 100% repeat-x; }
.ratings .rating-box { float:left; margin:2px 3px 0 0; }
.ratings .amount {}

.ratings-table th,
.ratings-table td { font-size:11px; line-height:1.15; padding:3px 0; }
.ratings-table th { font-weight:bold; padding-right:8px; }
.ratings-table td { padding:4px 0 0; }

/* Availability */
.availability { margin:0; }
.availability span { font-weight:bold; }
.availability.in-stock span {}
.availability.out-of-stock span { color:#d83820; }

.availability-only { margin:10px 0 7px; line-height:16px; background:url(../images/i_availability_only.gif) 0 50% no-repeat; padding-left:15px; }
.availability-only span,
.availability-only a { border-bottom:1px dashed #751d02; color:#000; }
.availability-only a { background:url(../images/i_availability_only_arrow.gif) 100% 0 no-repeat; cursor:pointer; padding-right:15px; text-decoration:none; }
.availability-only .expanded { background-position:100% -15px; }
.availability-only strong { color:#be2c00; }

.availability-only-details { margin:0 0 7px; }
.availability-only-details th { background:#e9e9e9; font-size:10px; padding:0 8px; }
.availability-only-details td { border-bottom:1px solid #d9dde3; font-size:11px; padding:2px 8px 1px; }
.availability-only-details tr.odd { background:#fff; }
.availability-only-details tr.even { background:#fcfcfc; }
.availability-only-details tr.odd td.last { color:#396f00; font-weight:bold; }
.availability-only-details tr.last td { border-bottom:none; }

.product-view .product-shop .availability { font-size:11px; }
.product-view .product-shop .availability span { font-weight:normal; }

/* Email to a Friend */
.email-friend { margin:0; }

/* Alerts */
.alert-price { margin:0; font-size:11px; }
.alert-stock { margin:0; font-size:11px; }

/********** < Product Prices */
.price { white-space:nowrap !important; }

.price-box { margin:5px 0 10px; }
.price-box .price { font-size:13px; font-weight:bold; color:#396f00; }

/* Regular price */
.regular-price { color:#396f00; }
.regular-price .price { font-size:13px; font-weight:bold; color:#396f00; }

/* Old price */
.old-price { margin:0; }
.old-price .price-label { font-size:12px; font-weight:bold; white-space:nowrap; }
.old-price .price { font-weight:bold; font-size:13px; color:#396f00; text-decoration:line-through; }

/* Special price */
.special-price { margin:0; }
.special-price .price-label { font-size:11px; font-weight:bold; text-transform:uppercase; white-space:nowrap; color:#000; }
.special-price .price { font-size:13px; font-weight:bold; }

/* Minimal price (as low as) */
.minimal-price { margin:0; }
.minimal-price .price-label { font-size:12px; font-weight:bold; white-space:nowrap; }

.minimal-price-link { display:block; font-size:12px; text-decoration:underline; color:#444; }
.minimal-price-link .label {color:#444;}
.minimal-price-link .price { font-weight:normal; color:#444; }

/* Including tax */
.price-including-tax { display:block; color:#888; }
.price-including-tax .label {  font-size:10px; text-transform:uppercase; white-space:nowrap; color:#888; }
.price-including-tax .price { font-size:13px; font-weight:bold; color:#396f00; }

/* Excluding tax */
.price-excluding-tax { display:block; color:#888; }
.price-excluding-tax .label { font-size:10px; text-transform:uppercase; white-space:nowrap; color:#888; }
.price-excluding-tax .price { font-size:12px; font-weight:normal; color:#396f00; }

/* Configured price */
.configured-price { margin:0; }
.configured-price .price-label { font-weight:bold; white-space:nowrap; }
.configured-price .price { font-size:13px; font-weight:bold; }

/* Incl tax (for order tables) */
.price-incl-tax { display:block; }
.price-incl-tax .label { display:block; white-space:nowrap; }
.price-incl-tax .price { display:block; font-weight:bold; }

/* Excl tax (for order tables) */
.price-excl-tax  { display:block; }
.price-excl-tax .label { display:block; white-space:nowrap; }
.price-excl-tax .price { display:block; font-weight:normal; }

/* FPT */
.weee { display:block; font-size:11px; color:#444; }
.weee .price { font-size:11px; font-weight:normal; }

/* Price range */
.price-from { margin:0; }
.price-from .price-label { font-size:12px; font-weight:bold; white-space:nowrap; }

.price-to { margin:0; }
.price-to .price-label { font-size:12px; font-weight:bold; white-space:nowrap; }

/* Price notice next to the options */
.price-notice { padding-left:7px; }
.price-notice .price { font-weight:bold; }

/* Price as configured */
.price-as-configured { margin:0; }
.price-as-configured .price-label { font-weight:bold; white-space:nowrap; text-transform:uppercase; }

.price-box-bundle { padding:0 0 10px 0; }
.price-box-bundle .price-box { margin:0 !important; padding:0 !important; }
.price-box-bundle .price { color:#222; }
/********** Product Prices > */

/* Tier Prices */
.product-pricing,
.tier-prices { margin:10px 0; padding:10px; background:#f4f9ea; border:1px solid #ddd; }
.tier-prices .benefit { font-style:italic; font-weight:bold; }
.tier-prices .price { font-weight:bold;; }

.tier-prices-grouped li .price { font-weight:bold; }

/* Add to Links */
.add-to-links { margin:3px 0 0; }
.add-to-links li { background:url(../images/bkg_add-to.gif) 2px 50% no-repeat; line-height:1.25; padding-left:12px; }
.add-to-links li a { color:#444; }
.add-to-links .separator { display:none; }

/* Add to Cart */
.add-to-cart label { float:left; margin-right:5px; font-weight:bold; line-height:20px; color:#555; }
.add-to-cart .qty { float:left; margin-right:5px; }
.add-to-cart button.button { float:left; margin:-3px 0 0; }
.add-to-cart .paypal-logo { clear:left; margin:0; text-align:right; }
.add-to-cart .paypal-logo .paypal-or { clear:both; display:block; margin:5px 60px 5px 0; }

/* Add to Links + Add to Cart */
.add-to-box { margin:10px 0; }
.add-to-box .add-to-cart { margin:10px 0; border:1px solid #eee; background-color:#f8f8f8; padding:10px; text-align:right; }
.add-to-box .add-to-cart .paypal-logo { float:left; }
.add-to-box .or { display:none !important; }
.add-to-box .add-to-links { margin:10px 0; text-align:right; }
.add-to-box .add-to-links li .separator { display:none !important; }


.product-view {}

.product-essential { padding:0 0 25px; }
.product-essential h2 { font:bold 12px/1.25 Arial, Helvetica, sans-serif; }

.product-collateral {}
.product-collateral h2 { font-size:19px; font-weight:normal; line-height:1.15; }
.product-collateral .box-collateral {}

/* Product Images */
.product-view .product-img-box { float:left; width:302px; }
.col3-layout .product-view .product-img-box { float:none; margin:0 auto; }
.product-view .product-img-box .product-image { margin:0 0 10px; border:1px solid #cacaca; }
.product-view .product-img-box .product-image-zoom { position:relative; width:300px; height:300px; overflow:hidden; z-index:9; }
.product-view .product-img-box .product-image-zoom img { position:absolute; left:0; top:0; cursor:move; }
.product-view .product-img-box .zoom-notice { margin:0 0 10px; text-align:center; }
.product-view .product-img-box .zoom { position:relative; z-index:9; height:24px; margin:0 auto 13px; padding:0 28px; background:url(../images/slider_bg.gif) 50% 50% no-repeat; cursor:pointer; }
.product-view .product-img-box .zoom.disabled { -moz-opacity:.3; -webkit-opacity:.3; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";/*IE8*/ opacity:.3; }
.product-view .product-img-box .zoom #track { position:relative; height:18px; }
.product-view .product-img-box .zoom #handle { position:absolute; left:0; top:3px; width:9px; height:18px; background:url(../images/magnifier_handle.gif) 0 0 no-repeat;  }
.product-view .product-img-box .zoom .btn-zoom-out { position:absolute; left:10px; top:7px; }
.product-view .product-img-box .zoom .btn-zoom-in { position:absolute; right:10px; top:7px; }
.product-view .product-img-box .more-views h2 { font-size:10px; font-weight:normal; padding:0 0 2px; border-bottom:1px solid #ccc; margin:0 0 8px; text-transform:uppercase; }
.product-view .product-img-box .more-views ul { margin-left:-10px }
.product-view .product-img-box .more-views li { float:left; margin:0 0 8px 10px; }
.product-view .product-img-box .more-views li a { float:left; width:66px; height:66px; border:1px solid #ddd; overflow:hidden; }

.product-image-popup { margin:0 auto; }
.product-image-popup .buttons-set { float:right; clear:none; border:0; margin:0; padding:0; }
.product-image-popup .nav { font-weight:bold; margin:0 100px; text-align:center; }
.product-image-popup .image { display:block; margin:10px 0; }
.product-image-popup .image-label { font-size:12px; font-weight:bold; margin:0 0 10px; color:#2f2f2f; }

/* Product Shop */
.product-view .product-shop { float:right; width:363px; }
.col1-layout .product-view .product-shop { float:right; width:576px; }
.col3-layout .product-view .product-shop { float:none; width:auto; }
.product-view .product-shop .product-name { margin:0 0 5px; }
.product-view .product-shop .product-name h1 { font:bold 13px/1.25 Arial, Helvetica, sans-serif; }
.product-view .product-shop .availability { margin:10px 0; }
.product-view .product-shop .short-description { margin:10px 0; }
.product-view .product-shop .price-box { margin:10px 0; }
.product-view .product-shop .add-to-links { margin:0; }
.product-view .product-shop .add-to-links { text-align:right; }
.product-view .product-shop .add-to-links li { display:inline; margin-left:12px; }
.product-view .product-shop .add-to-links li .separator { display:none !important; }
.product-view .product-shop .product-options-bottom .paypal-logo { float:left; }

/* Product Options */
.product-options { margin:20px 0 0; padding:0 15px 10px; background-color:#f4f9ea; border:1px solid #ddd; position:relative; }
.product-options dt { padding:10px 0 0; font-weight:normal; }
.product-options dt label { font-weight:bold; }
.product-options dt label.required em { color:#eb340a; margin-left:5px; }
.product-options dd .qty-holder { display:block; padding:10px 0 0; }
.product-options dd .qty-holder label { vertical-align:middle; }
.product-options dd .qty-disabled { background:none; border:0; padding:3px; color:#444; }
.product-options dd { padding:5px 10px 15px; margin:0 0 5px; border-bottom:1px solid #ddd; }
.product-options dl.last dd.last { border-bottom:0; padding-bottom:5px; margin-bottom:0; }
.product-options dd input.input-text { width:98%; }
.product-options dd input.datetime-picker { width:150px; }
.product-options dd .time-picker { display:-moz-inline-box; display:inline-block; padding:2px 0; vertical-align:middle; }
.product-options dd textarea { width:98%; height:8em; }
.product-options dd select { width:99%; }
.product-options dd .multiselect option { border-bottom:1px dotted #d9e5ee; padding:2px 4px; }
.product-options ul.options-list { margin-right:5px; }
.product-options ul.options-list li { padding:2px 0; }
.product-options ul.options-list input.radio { float:left; margin-top:3px; }
.product-options ul.options-list input.checkbox { float:left; margin-top:2px; }
.product-options ul.options-list .label { display:block; margin-left:18px; }
.product-options ul.options-list label { font-weight:normal; }
.product-options ul.validation-failed { padding:0 7px; }
.product-options p.required { position:absolute; right:15px; top:10px; }

.product-options-bottom { background-color:#f6f6f6; padding:15px 20px; border:1px solid #e4e4e4; border-top:0; }
.product-options-bottom .product-pricing,
.product-options-bottom .tier-prices { margin:0; padding:0 0 10px; border:0; background:0; }
.product-options-bottom .price-box { float:left; margin:0; }
.product-options-bottom .add-to-links { clear:both; padding:5px 0 0; text-align:right; }
.product-options-bottom .price-label { padding-right:5px; }
.product-options-bottom .price-tax { float:left; }
.product-options-bottom .add-to-cart { float:right; margin:0; padding:0; border:0; background:0; }
.product-options-bottom .add-to-links { float:right; display:inline; }

.product-shop .product-options-bottom .price-box { float:none; margin:0; }
.product-shop .product-options-bottom .price-label { float:none; padding-right:0; }
.product-shop .product-options-bottom .price-tax { float:none; }
.product-shop .product-options-bottom .add-to-cart { clear:both; float:none; padding:12px 0 0; text-align:left; }

/* Grouped Product */
.product-view .grouped-items-table .price-box { margin:0; padding:0; }

/* Product Tabs */
.product-tabs { margin-bottom:15px; border-bottom:1px solid #666; background:#f2f2f2 url(../images/bkg_tabs.gif) 0 100% repeat-x; }
.product-tabs li { float:left; border-right:1px solid #a4a4a4; border-left:1px solid #fff; font-size:1.1em; line-height:1em; }
.product-tabs li.first { border-left:0; }
.product-tabs li.last { border-right:0; }
.product-tabs a { display:block; padding:6px 15px; color:#444; }
.product-tabs a:hover { background-color:#ddd; text-decoration:none; color:#444; }
.product-tabs li.active a,
.product-tabs li.active a:hover { background-color:#666; font-weight:bold; color:#fff; }
.product-tabs-content h2 { display:none; font-size:12px; font-weight:bold; }

/* Mini Products Grid */
.mini-products-grid { width:100%; }
.mini-products-grid td { width:20%; padding:0 8px 8px 0; }
.mini-products-grid .product-image { display:block; border:1px solid #cacaca; margin:0 0 10px; }
.mini-products-grid .product-name { width:115px; margin:0 0 6px; overflow:hidden; }
.mini-products-grid .product-name a { color:#444; text-decoration:underline; }
.mini-products-grid .product-name a:hover { text-decoration:none; }
.mini-products-grid td.empty {}
.mini-products-grid td.last { padding-right:0; }
.mini-products-grid .ratings .rating-box { float:none; display:block; margin:0 0 3px; }

/* Block: Description */
.product-view .box-description {}

/* Block: Additional */
.product-view .box-additional .data-table th,
.product-view .box-additional .data-table td { line-height:1.25; }

/* Block: Upsell */
.product-view .box-up-sell h2 { margin:0 0 8px; }
#product_tabs_upsell_products_contents h2 { display:block; }

/* Block: Tags */
.product-view .box-tags { margin:0; }
.product-view .box-tags h3 { font-size:12px; }
.product-view .box-tags .product-tags { display:block; margin:0 0 15px; }
.product-view .box-tags .product-tags li { display:inline; background:url(../images/bkg_pipe3.gif) 100% 4px no-repeat; padding:0 7px 0 4px; }
.product-view .box-tags .product-tags li.first { padding-left:0; }
.product-view .box-tags .product-tags li.last { background:none; padding-right:0; }
.product-view .box-tags .form-add label { display:block; font-size:12px; font-weight:bold; margin:0 0 3px; }
.product-view .box-tags .form-add .input-box { float:left; width:305px; margin:0 5px 0 0; }
.product-view .box-tags .form-add input.input-text { width:299px; }
.product-view .box-tags .form-add button.button span { height:23px; background-image:url(../images/bkg_btn-small.png); line-height:20px; }
.product-view .box-tags .note { margin:2px 0 0; font-size:10px; }

/* Block: Reviews */
.product-view .box-reviews dl { margin:15px 0; }
.product-view .box-reviews dt a,
.product-view .box-reviews dt span { font-weight:bold; }
.product-view .box-reviews dd { margin:0 0 15px; }
.product-view .box-reviews dd small { font-style:italic; }
.product-view .box-reviews .form-add { margin:15px 0 0; }
.product-view .box-reviews .form-add h3 { font-size:13px; font-weight:normal; }
.product-view .box-reviews .form-add h3 span { font-weight:bold; }
.product-view .box-reviews .form-add h4 { font-size:12px; }
.product-view .box-reviews .form-add .data-table td { text-align:center; }
.product-view .box-reviews .form-add .form-list { margin:15px 0 0; }
.product-view .box-reviews .form-add .form-list .input-box { width:460px; }
.product-view .box-reviews .form-add .form-list input.input-text,
.product-view .box-reviews .form-add .form-list textarea { width:454px; }

/* Send a Friend */
.send-friend .form-list { width:535px; overflow:hidden; }
.send-friend .form-list li { margin-right:-15px; }
.send-friend .form-list li p { margin:0 15px 0 0; }
.send-friend .buttons-set .limit { float:right; margin:0 7px 0 0; font-size:11px; line-height:25px; }
/* ======================================================================================= */


/* Content Styles ================================================================= */
.product-name { margin:0; font-size:1em; font-weight:normal; line-height:1.55; }
/*.product-name a { color:#444; }*/

/* Product Tags */
.tags-list { display:block; font-size:13px; border:1px solid #ddd; background:#f6f6f6; padding:10px; }
.tags-list li { display:inline !important; margin:0 4px 0 0; }
.tags-list li a { color:#1b2d3b; }

/* Advanced Search */
.advanced-search .form-list label { width:160px; padding-right:10px; }
.advanced-search .form-list .input-box,
.advanced-search .form-list .input-range { float:left; clear:none; }
.advanced-search-amount { margin:0 0 10px; }
.advanced-search-summary { margin:10px 0; border:1px solid #ddd; background:#ecf9ea; padding:10px; }
.advanced-search-summary ul { float:left; width:49%; }
.advanced-search-summary strong { color:#E17C24; }
.advanced-search-summary li { margin:2px 0; }
.advanced-search-summary p { clear:both; font-weight:bold; margin:0; }

/* CMS Home Page */
.cms-home .main { padding:8px; }
.cms-home .subtitle {}
.cms-index-index .subtitle {}

/* Sitemap */
.page-sitemap .links { text-align:right; margin:0 8px -22px 0; }
.page-sitemap .links a { text-decoration:none; position:relative; }
.page-sitemap .links a:hover { text-decoration:underline; }
.page-sitemap .sitemap { margin:12px; }
.page-sitemap .sitemap a { color:#444; }
.page-sitemap .sitemap li { margin:3px 0; }
.page-sitemap .sitemap li.level-0 { margin:10px 0 0; font-weight:bold; }
.page-sitemap .sitemap li.level-0 a { color:#4f8100; }

/* RSS */
.rss-title h1 { background:url(../images/i_rss-big.png) 0 3px no-repeat; padding-left:27px; }
.rss-table .link-rss { display:block; line-height:1.55; background-position:0 4px; }
/* ======================================================================================= */


/* Shopping Cart ========================================================================= */
.cart .page-title {}

/* Checkout Types */
.cart .page-title .checkout-types { display:none !important; }
.cart .checkout-types .paypal-or { margin:0 8px; line-height:2.3; }
.cart .totals .checkout-types .paypal-or { clear:both; display:block; padding:8px 55px 0 0; line-height:1.0; font-size:11px; }

/* Shopping Cart Table */
.cart-table th { padding:2px 10px; }
.cart-table td { padding:10px; }
.cart-table .product-name { font-weight:bold; margin:0 0 5px; color:#444; }
.cart-table .item-msg { margin:5px 0; font-size:11px; font-weight:bold; color:#df280a; }
.cart-table tfoot td { padding:5px 10px; }
.cart-table .btn-continue { float:left; }
.cart-table .btn-continue span { background:none; padding:0; font:normal 11px/25px Arial, Helvetica, sans-serif; color:#4f8100; text-transform:none; text-decoration:underline; }
.cart-table .btn-continue:hover span { text-decoration:none; }
.cart-table .btn-update,
.cart-table .btn-empty { float:right; }
.cart-table .btn-update { margin-left:7px; }

/* Shopping Cart Collateral boxes */
.cart .cart-collaterals { padding:25px 0 0; }
.cart .cart-collaterals .col2-set .col-1 { width:222px; }
.cart .cart-collaterals .col2-set .col-2 { width:655px; background:#e6f7d7; }

.cart .crosssell { border:1px solid #ddd; background:#f7f7f7; padding:10px; }
.cart .crosssell h2 { font-size:12px; font-weight:bold; }
.cart .crosssell .product-image { float:left; width:75px; height:75px; }
.cart .crosssell .product-details { margin-left:85px; }
.cart .crosssell .product-name { font-weight:bold; }
.cart .crosssell li.item { margin:0 0 8px; padding-bottom:5px; border-bottom:1px solid #ddd; }
.cart .crosssell li.last { border-bottom:0; padding-bottom:0; margin:0; }
.cart .crosssell .link-compare { font-weight:normal; }
.cart .no-crosssell { width:100%; overflow:hidden; }
.cart .no-crosssell img { display:block; margin:0 0 10px; }

/* Discount Codes & Estimate Shipping and Tax Boxes */
.cart .discount,
.cart .shipping { background:#e6f7d7; padding:10px 0; margin:0 12px; }
.cart .discount h2,
.cart .shipping h2 { float:left; width:225px; font:normal 14px/16px Arial, Helvetica, sans-serif; color:#d54c01; }
.cart .discount .discount-form,
.cart .shipping .shipping-form { margin-left:240px; }
.cart .discount .buttons-set,
.cart .shipping .buttons-set { margin:10px 0 0; border:0; padding:0; text-align:left; }
.cart .discount .buttons-set button.button,
.cart .shipping .buttons-set button.button { float:none; margin:0; }
.cart .discount .buttons-set button.button span,
.cart .shipping .buttons-set button.button span { height:19px; background-image:url(../images/bkg_btn-green.gif); padding:0 0 0 9px; font-size:10px; line-height:18px; color:#fff; }
.cart .discount .buttons-set button.button span span,
.cart .shipping .buttons-set button.button span span { padding:0 19px 0 10px; }

.cart .discount { border-bottom:1px solid #c0d2af ; }
.cart .discount label { font-weight:bold; color:#555; }
.cart .discount .input-box { width:270px; }
.cart .discount input.input-text { width:264px; }

.cart .shipping p { margin:0 0 3px; }
.cart .shipping .sp-methods { margin:10px 0 0; padding:6px 0 0; border-top:1px solid #c0d2af; }
.cart .shipping .form-list .input-box { width:270px; }
.cart .shipping .form-list input.input-text { width:264px; }
.cart .shipping .form-list select { width:270px; }

/* Shopping Cart Totals */
.cart .totals { background:#fff url(../images/bkg_cart-totals.gif) 0 0 no-repeat; padding:12px 0; }
.cart .totals table { float:right; width:400px; margin:0 0 8px; }
.cart .totals td { padding:0 0 0 15px; }
.cart .totals tr.last td {}
.cart .totals tfoot td {}
.cart .totals tfoot th strong,
.cart .totals tfoot td strong { font-size:14px; font-weight:bold; color:#e02f00; }
.cart .totals .checkout-types { font-size:13px; padding:4px 0; text-align:right; }
.cart .totals .checkout-types li { clear:both; margin:0 0 5px; }

/* Options Tool Tip */
.item-options dt { font-weight:bold; font-style:italic; }
.item-options dd { padding-left:10px; }
.truncated { cursor:help; }
.truncated a.dots { cursor:help; text-decoration:none !important; }
.truncated a.details { cursor:help; text-decoration:none !important; display:inline-block; border-bottom:1px dotted #4f8100; }
.truncated .truncated_full_value { position:relative; z-index:999; }
.truncated .truncated_full_value .item-options { position:absolute; top:-99999em; z-index:999; width:250px; padding:8px; border:2px solid #ddd; border-bottom-color:#666; background-color:#f6f6f6; }
.truncated .truncated_full_value .item-options dt { margin-top:0; }
.truncated .truncated_full_value .item-options > p { font-weight:bold; text-transform:uppercase; }
.truncated .show .item-options { top:-20px; left:50%; }
.col-left .truncated .show .item-options { left:30px; top:10px; }
.col-right .truncated .show .item-options { left:-240px; top:10px; }
/* ======================================================================================= */


/* Checkout ============================================================================== */
/********** < Common Checkout Styles */
/* Shipping and Payment methods */
.sp-methods { margin:0 0 8px; }
.sp-methods dt { margin:13px 0 5px; font-weight:bold; }
.sp-methods dd {}
.sp-methods dd li { margin:5px 0; }
.sp-methods label { font-weight:bold; color:#555; }
.sp-methods .price { font-weight:bold; }
.sp-methods .form-list { padding-left:20px; }
.sp-methods .form-list li { margin:0 0 8px; }
.sp-methods select.month { width:154px; margin-right:10px; }
.sp-methods select.year { width:96px; }
.sp-methods input.cvv { width:3em !important; }

.sp-methods .checkmo-list li { margin:0 0 5px; }
.sp-methods .checkmo-list label { width:135px; padding-right:10px; text-align:right; }
.sp-methods .checkmo-list address { float:left; }

.sp-methods .centinel-logos a { margin-right:3px; }
.sp-methods .centinel-logos img { vertical-align:middle; }

.sp-methods .release-amounts { margin:1.5em 0 2em; }
.sp-methods .release-amounts button { float:left; margin:5px 10px 0 0; }

.please-wait { float:right; }
.please-wait img { vertical-align:middle; }
.cvv-what-is-this { font-size:11px; cursor:help; margin-left:10px; }

/* Tooltip */
.tool-tip { border:2px solid #ddd; border-bottom-color:#666; background:#f6f6f6; padding:15px 20px; position:absolute; z-index:9999; }
.tool-tip .btn-close { margin:-9px -14px 0; text-align:right; }
.tool-tip .btn-close a { display:block; margin:0 0 0 auto; width:12px; height:12px; background:url(../images/btn_window_close.gif) 100% 0 no-repeat; text-align:left; text-indent:-999em; overflow:hidden; }
.tool-tip .tool-tip-content { padding:5px; }

/* Gift Messages */
.gift-messages h3 { font-size:12px; font-weight:bold; color:#e87403; }
.gift-messages p.control { color:#8e8d8b; }
.gift-messages-form { position:relative; }
.gift-messages-form label { float:none !important; position:static !important; }
.gift-messages-form h4 { font-size:12px; font-weight:bold; color:#e87403; }
.gift-messages-form .whole-order { margin:0 0 25px; }
.gift-messages-form .item { margin:0 0 10px; }
.gift-messages-form .item .product-img-box { float:left; width:75px; }
.gift-messages-form .item .product-image { margin:0 0 7px; }
.gift-messages-form .item .number { margin:0; font-weight:bold; text-align:center; color:#8a8987; }
.gift-messages-form .item .details { margin-left:90px; }
.gift-messages-form .item .details .product-name { font-size:13px; font-weight:bold; margin:0 0 10px; }
.gift-messages-form .item .details .form-list .field { width:255px; }
.gift-messages-form .item .details .form-list .input-box { width:240px; }
.gift-messages-form .item .details .form-list input.input-text { width:234px; }
.gift-messages-form .item .details .form-list li.wide .input-box { width:500px; }
.gift-messages-form .item .details .form-list li.wide textarea { width:494px; }

.gift-message-link { font-size:11px; background:url(../images/bkg_collapse-gm.gif) 100% 6px no-repeat; padding-right:7px; }
.gift-message-link.expanded { background-position:100% -40px; }
.gift-message-row { background:#f2efe9; }
.gift-message-row .btn-close { float:right; width:12px; height:12px; background:url(../images/btn_remove.gif) 0 0 no-repeat; font-size:0; line-height:0; text-indent:-999em; overflow:hidden; }

/* Checkout Agreements */
.checkout-agreements li { margin:30px 0; }
.checkout-agreements .agreement-content { overflow:auto; height:12em; padding:10px; background:#fbfbfb; border:1px solid #e4e4e4; }
.checkout-agreements .agree { margin:0; padding:10px 0 10px 11px; }
.checkout-agreements .agree input.checkbox { margin-right:6px; }
.checkout-agreements .agree label { font-weight:bold; color:#555; }

.opc .checkout-agreements { padding:5px 30px; }
.opc .checkout-agreements li { margin:20px 0 0; }
.opc .checkout-agreements .agreement-content { background:#fff; padding:5px; }
.opc .checkout-agreements .agree { padding-left:6px; }

/* Centinel */
.centinel {}
.centinel .authentication { border:1px solid #ddd; background:#fff; }
.centinel .authentication iframe { width:99%; height:400px; background:transparent !important; margin:0 !important; padding:0 !important; border:0 !important; }

.opc .centinel { padding:10px 30px; }

/* Generic Info Set */
.info-set { background:#fbfbfb; border:1px solid #ddd; margin:0 0 25px; padding:20px; }
.info-set h2 { font-size:12px; font-weight:bold; margin:0 0 10px; }
.info-set h3,
.info-set h4 { font-size:12px; font-weight:bold; }
.info-set h2 a,
.info-set h3 a,
.info-set h4 a { font-weight:normal; }
.info-set h2.legend { margin:-20px -20px 15px; padding:3px 10px; background:#777; border-bottom:1px solid #777; position:relative; color:#fff; }
.info-set h2.legend a { color:#fff; }
.info-set h3.legend { margin:0 0 10px; }
.info-set .divider { margin:0 -20px; padding:25px 0; position:relative; }
.info-set .box { margin:0 0 15px; }
.info-set .box h2 { color:#e26703; }
.info-set .data-table .product-name { font-size:1em !important; font-weight:bold !important; color:#4f8100 !important; }
.info-set .data-table .product-name a { font-weight:bold !important; }
.info-set .data-table .item-options { margin:5px 0 0; }
/********** Common Checkout Styles > */

/* One Page Checkout */
.block-progress { border:0; margin:0; }
.block-progress .block-title { background:none; border:0; padding:0; margin:0 0 5px; }
.block-progress .block-title strong { font-size:12px; }
.block-progress .block-content { background:none; padding:0; }
.block-progress dt { font-size:10px; line-height:1.35; background:#eee; border:1px solid #ddd; margin:0 0 6px; padding:2px 8px; color:#555; text-transform:uppercase; }
.block-progress dd { border-top:0; padding:2px 10px; margin:0 0 6px; }
.block-progress dt.complete {}
.block-progress dt.complete a { text-transform:none; }
.block-progress dd.complete {}
.block-progress p { margin:0; }
.block-progress .cards-list dt { background:none; border:0 none; color:inherit; font-size:11px; font-weight:bold; margin:5px 0; padding:0; text-transform:none; }
.block-progress .cards-list dd { border:0 none; margin:0; padding:0; }
.block-progress .cards-list .info-table th { font-weight:normal; }

.opc .buttons-set { margin-top:0; padding-top:2em; }
.opc .buttons-set p.required { margin:0; padding:0 0 10px; }
.opc .buttons-set.disabled button.button { display:none; }
.opc .buttons-set .please-wait { height:28px; line-height:28px; }
.opc .ul { list-style:disc outside; padding-left:18px; }

.opc { position:relative; }
.opc li.section {}

.opc .step-title { border:1px solid #ddd; border-top-color:#fff; background:#eee; padding:4px 8px 6px; text-align:right; }
.opc .step-title .number { float:left; background:#fff; border:1px solid #fff; padding:0 3px; margin:0 5px 0 0; font:normal 11px/12px arial, helvetica, sans-serif; color:#444; }
.opc .step-title h2 { float:left; margin:0; font:bold 12px/14px Arial, Helvetica, sans-serif; color:#999; }
.opc .step-title a { display:none; float:right; font-size:11px; line-height:16px; }

.opc .allow .step-title { background:#999; border-color:#999; border-top-color:#fff; color:#fff; cursor:pointer; }
.opc .allow .step-title .number {}
.opc .allow .step-title h2 { color:#fff; }
.opc .allow .step-title a { display:block; font-size:10px; color:#fff; text-transform:uppercase; }

.opc .active .step-title { background:#e46b00; border-color:#e46b00; border-top-color:#fff; padding-bottom:5px; color:#fff; cursor:default; }
.opc .active .step-title .number {}
.opc .active .step-title h2 { color:#fff; }
.opc .active .step-title a { display:none; }

.opc .step { border:1px solid #ddd; border-top:0; background:#fbfbfb; padding:15px 30px; position:relative; }
.opc .step .tool-tip { right:30px; }

#opc-login h3 { font-size:13px; border-bottom:1px solid #e4e4e4; padding-bottom:2px; text-transform:uppercase; }
#opc-login h4 { font-size:1em; font-weight:bold; margin:0; color:#2f2f2f; }

#opc-shipping_method .buttons-set { border-top:0; }
.opc .gift-messages-form { margin:0 -30px; background:#f4f4f4; border:1px solid #ddd; border-width:1px 0; padding:22px 24px 22px 30px; }
.opc .gift-messages-form .inner-box { padding:5px; height:260px; overflow:auto; }

#opc-review .step { padding:0; }
#opc-review .product-name { font-weight:bold; }
#opc-review .item-options { margin:5px 0 0; }
#opc-review .buttons-set { border:0; padding:15px 30px; }
#opc-review .buttons-set p { margin:0; line-height:28px; }
#opc-review .buttons-set .please-wait { height:28px; line-height:28px; }
#opc-review .authentication { margin:0 auto; width:570px; }
#opc-review .warning-message { color:#222; font-weight:bold; text-align:center; padding:10px 10px 0; }

/* Multiple Addresses Checkout */
.checkout-progress { padding:0 90px; margin:0 0 20px; }
.checkout-progress li { float:left; width:19%; margin:0 3px 0 0; border-top:6px solid #999; padding:2px 0 0; font-weight:bold; text-align:center; color:#888; }
.checkout-progress li.active { border-top-color:#e96200; color:#e96200; }

.multiple-checkout h2 { font-size:12px; font-weight:bold; margin:0 0 10px; }
.multiple-checkout h3,
.multiple-checkout h4 { font-size:12px; font-weight:bold; }
.multiple-checkout h2 a,
.multiple-checkout h3 a,
.multiple-checkout h4 a { font-weight:normal; }
.multiple-checkout .data-table .product-name { font-size:1em !important; font-weight:bold !important; color:#4f8100 !important; }
.multiple-checkout .data-table .product-name a { font-weight:bold !important; }
.multiple-checkout .data-table .item-options { margin:5px 0 0; }

.multiple-checkout .gift-messages { margin:15px 0 0; }

.multiple-checkout .tool-tip { top:50%; margin-top:-120px; right:20px; }

.multiple-checkout .col2-set,
.multiple-checkout .col3-set { background:#fbfbfb; border:1px solid #ddd; margin:0 0 25px; padding:20px; }
.multiple-checkout .col2-set h2.legend { margin:-20px -20px 15px; padding:3px 10px; background:#777; border-bottom:1px solid #777; position:relative; color:#fff; }
.multiple-checkout .col2-set h3.legend { margin:0 0 10px; }
.multiple-checkout .col2-set .divider { margin:0 -20px; padding:25px 0; position:relative; }
.multiple-checkout .box { margin:0 0 15px; }

.multiple-checkout .place-order .please-wait { float:right; padding:5px 10px 0 0; }
.multiple-checkout .place-order .grand-total { float:right; }
.multiple-checkout .place-order .grand-total .inner {}
.multiple-checkout .place-order .grand-total big { float:left; margin-right:12px; font-size:1.5em; font-weight:bold; line-height:28px; color:#e26703; }
.multiple-checkout .place-order .grand-total div { float:left; }

/* Step 1 */
#multiship-addresses-table td { padding:10px; }
#multiship-addresses-table tfoot td { padding:5px 10px; }

/* Step 2 */
.multiple-checkout .gift-messages-form .item .details .form-list { width:100%; overflow:hidden; }
.multiple-checkout .gift-messages-form .item .details .form-list li { margin-right:-15px; }
.multiple-checkout .gift-messages-form .item .details .form-list .field { width:230px; }
.multiple-checkout .gift-messages-form .item .details .form-list .input-box { width:215px; }
.multiple-checkout .gift-messages-form .item .details .form-list input.input-text { width:209px; }
.multiple-checkout .gift-messages-form .item .details .form-list li.wide .input-box { width:445px; }
.multiple-checkout .gift-messages-form .item .details .form-list li.wide textarea { width:439px; }
.checkout-multishipping-shipping .box-sp-methods { border:1px solid #ddd; background:#eee; padding:13px; position:relative; }
.checkout-multishipping-shipping .box-sp-methods .pointer { display:none; }

/* Step 3 */
.checkout-multishipping-billing .multiple-checkout { position:relative; }
/* ======================================================================================= */


/* Account Login/Create Pages ============================================================ */
.account-login .content { min-height:200px; padding:0 10px; }
.account-login .content h2 { margin:0 -10px 12px; background:#f1f1f1; padding:2px 10px; font-size:13px; line-height:1.25; }
.account-login .buttons-set {}

.account-create {}
/* Account Login/Create Pages ============================================================ */

/* Captcha */
.captcha-note   { clear:left; padding-top:5px; }
.captcha-image  { float:left; display:inline; margin:0; position:relative; width:258px; }
.captcha-image .captcha-img { border:1px solid #b6b6b6; vertical-align:bottom; width:100%; }
.registered-users .captcha-image { margin:0; }
.captcha-reload { cursor:pointer; position:absolute; top:2px; right:2px; }
.captcha-reload.refreshing  { animation:rotate 1.5s infinite linear; -webkit-animation:rotate 1.5s infinite linear; -moz-animation:rotate 1.5s infinite linear; }

@-webkit-keyframes rotate {
    0% { -webkit-transform:rotate(0); }
    0% { -webkit-transform:rotate(-360deg); }
}
@-moz-keyframes rotate {
    0% { -moz-transform:rotate(0); }
    0% { -moz-transform:rotate(-360deg); }
}
@keyframes rotate {
    0% { transform:rotate(0); }
    0% { transform:rotate(-360deg); }
}

/* Remember Me Popup ===================================================================== */
.window-overlay { background:url(../images/window_overlay.png) repeat; background:rgba(0, 0, 0, 0.35); position:absolute; top:0; left:0; height:100%; width:100%; z-index:990; }

.remember-me label { float:none; margin:0 6px; }
.remember-me-popup { background:#fff; border:1px solid #888; border-bottom-color:#777; left:50%; top:50%; position:absolute; margin:-85px 0 0 -200px; width:400px; text-align:left; -moz-box-shadow:0 0 6px #999; -webkit-box-shadow:0 0 6px #999; box-shadow:0 0 6px #999; z-index:1000; }
.remember-me-popup h3 { background:#dedede; border-bottom:1px solid #ccc; color:#444; font-size:14px; margin:0; padding:7px 10px 5px; }
.remember-me-popup .remember-me-popup-head { position:relative; }
.remember-me-popup .remember-me-popup-head .remember-me-popup-close { background:url(../images/btn_window_close.gif) no-repeat; display:block; position:absolute; top:9px; right:7px; height:15px; width:15px; text-indent:-9999em; }
.remember-me-popup .remember-me-popup-body { border-top:1px solid #e6e6e6; padding:10px; }
.remember-me-popup .remember-me-popup-body a,
.remember-me-popup .remember-me-popup-body a span { display:inline-block; height:28px; background:transparent url(../images/bkg_btn.png) 0 0 no-repeat; padding:0 0 0 6px; font:bold 11px/25px Tahoma, Verdana, Arial, sans-serif; text-transform:uppercase; text-align:center; white-space:nowrap; color:#555; }
.remember-me-popup .remember-me-popup-body a span { background-position:100% 0; padding:0 15px 0 9px; }
/* Remember Me Popup ===================================================================== */


/* My Account ============================================================================= */
.my-account .title-buttons .link-rss { float:none; margin:0; }

/********** < Dashboard */
.dashboard .welcome-msg { margin:0 8em 1.5em 0; }
.dashboard .welcome-msg p { margin:0; }
.dashboard .col2-set { margin:0 0 15px; }

/* General Box */
.box-account { margin:0 0 15px; }
.box-account .box-head { margin:0 0 5px; text-align:right; }
.box-account .box-head h2 { float:left; margin:0; font-size:14px; font-weight:bold; color:#4f8100; }
.box-account .box-head a { font-size:10px; text-transform:uppercase; }

.dashboard .box .box-title { background:#f1f1f1; padding:2px 10px; margin:0 0 12px; text-align:right; }
.dashboard .box .box-title h3,
.dashboard .box .box-title h4 { float:left; margin:0; font-size:12px; font-weight:bold; line-height:1.35; }
.dashboard .box .box-title a { font-size:10px; text-transform:uppercase; }
.dashboard .box .box-content { padding:0 10px; }

/* Block: Recent Orders */
.dashboard .box-recent {}

/* Block: Account Information */
.dashboard .box-info {}
.dashboard .box-info h4 { font-size:11px; font-weight:bold; }

/* Block: Reviews */
.dashboard .box-reviews .box-head { background:#f1f1f1; padding:2px 10px; margin:0 0 12px; }
.dashboard .box-reviews .box-head h2 { font-size:12px; font-weight:bold; line-height:1.35; color:#444; }
.dashboard .box-reviews .number { display:none; float:left; font-size:10px; font-weight:bold; line-height:1; color:#fff; margin:3px -20px 0 0; padding:2px 3px; background:#0a263c; }
.dashboard .box-reviews .details { padding:0 10px; }
.dashboard .box-reviews li.item { margin:0 0 7px; }
.dashboard .box-reviews li.item.last { margin:0; }
.dashboard .box-reviews .ratings { margin:7px 0 0; }

/* Block: Tags */
.dashboard .box-tags .box-head { background:#f1f1f1; padding:2px 10px; margin:0 0 12px; }
.dashboard .box-tags .box-head h2 { font-size:12px; font-weight:bold; line-height:1.35; color:#444; }
.dashboard .box-tags .number { display:none; float:left; font-size:10px; font-weight:bold; line-height:1; color:#fff; margin:3px -20px 0 0; padding:2px 3px; background:#0a263c; }
.dashboard .box-tags .details { padding:0 10px; }
.dashboard .box-tags li.item { margin:0 0 7px; }
.dashboard .box-tags li.item.last { margin:0; }
.dashboard .box-tags .tags strong,
.dashboard .box-tags .tags ul,
.dashboard .box-tags .tags ul li { display:inline; }
/********** Dashboard > */

/* Address Book */
.addresses-list h2 { background:#f1f1f1; padding:2px 10px; margin:0 0 12px; font-size:13px; font-weight:bold; line-height:1.25; }
.addresses-list h3 { font-weight:bold; font-size:12px; }
.addresses-list address { margin:0 0 3px; }
.addresses-list p { margin:0; }
.addresses-list a { font-weight:bold; }
.addresses-list .link-remove {}
.addresses-list .separator { margin:0 3px; }
.addresses-list li.item { padding:0 10px; margin:0 0 12px; }
.addresses-list li.empty {}
.addresses-list li.empty p { font-weight:bold; }
.addresses-list .addresses-additional li.item {}

/* Order View */
.order-info dt { display:none; }
.order-info ul { margin-bottom:15px; border-bottom:1px solid #666; background:#f2f2f2 url(../images/bkg_tabs.gif) 0 100% repeat-x; }
.order-info li{ float:left; border-right:1px solid #a4a4a4; border-left:1px solid #fff; font-size:1.1em; line-height:1em; }
.order-info li.first { border-left:0; }
.order-info li.last { border-right:0; }
.order-info li a { display:block; padding:6px 15px; color:#444; }
.order-info li a:hover { background-color:#ddd; text-decoration:none; color:#444; }
.order-info li.current { background-color:#666; font-weight:bold; padding:6px 15px; color:#fff; }

.order-date { margin:10px 0; }

.order-info-box { margin:0 0 15px; }
.order-info-box h2 { font-size:13px; font-weight:bold; border-bottom:1px solid #ddd; margin:0 0 8px; }
.order-info-box .box-payment p { margin:0 0 3px; }
.order-info-box .box-payment th { font-weight:bold; padding-right:7px; }

.order-items { width:100%; overflow-x:auto; }
.order-items h2,
.order-items h3 { clear:none; font-weight:bold; font-size:13px; padding:0; margin:0 0 .45em; }
.order-items h3 { font-size:12px; }
.order-items .product-name { font-weight:bold !important; }
.order-items .link-print { font-size:10px; text-transform:uppercase; }
.order-items .order-links { text-align:right; }
.order-items .order-links .link-print { font-weight:bold; font-size:11px; text-transform:none; }

.order-additional { margin:15px 0; }
/* Order Gift Message */
.gift-message dt strong { color:#555; }
.gift-message dd { font-size:13px; margin:5px 0 0; }
/* Order Comments */
.order-about dt { font-weight:bold; }
.order-about dd { font-size:13px; margin:0 0 7px; }

.tracking-table { margin:0 0 15px; }
.tracking-table th { font-weight:bold; white-space:nowrap; }

.tracking-table-popup { width:100%; }
.tracking-table-popup th { font-weight:bold; white-space:nowrap; }
.tracking-table-popup th,
.tracking-table-popup td { padding:1px 8px; }

/* Order Print Pages */
.page-print .print-head { margin:0 0 15px; }
.page-print .print-head .logo { float:left; }
.page-print .print-head address { float:left; margin-left:15px; }
.page-print h1 { font-size:15px; font-weight:bold; }
.page-print h2,
.page-print h3 { font-size:12px; font-weight:bold; }
.page-print h2.h2 { font-size:15px; font-weight:bold; text-align:right; }
.page-print .order-date { border-bottom:1px solid #ccc; padding:0 0 10px; margin:0 0 10px; }
.page-print .col2-set { margin:0 0 10px; }
/* Price Rewrites */
.page-print .gift-message-link { display:none; }
.page-print .price-excl-tax,
.page-print .price-incl-tax { display:block; white-space:nowrap; }
.page-print .cart-price,
.page-print .price-excl-tax .label,
.page-print .price-incl-tax .label,
.page-print .price-excl-tax .price,
.page-print .price-incl-tax .price { display:inline; }

/* My Wishlist */
.my-wishlist .data-table td { padding:10px; }
.my-wishlist .product-image { display:block; width:113px; height:113px; margin:0 0 5px; }
.my-wishlist textarea { display:block; width:97%; height:109px; }
.my-wishlist .buttons-set { border:0; padding:0; margin:0 0 -3em; }
.my-wishlist .buttons-set button.button { float:none; }
.my-wishlist .buttons-set .btn-add span,
.my-wishlist .buttons-set .btn-share span {}
#wishlist-table .add-to-links { white-space:nowrap; }

/* My Tags */
.my-tag-edit { float:left; margin:0 0 10px; }
.my-tag-edit .btn-remove { float:right; margin:4px 0 0 5px; }
#my-tags-table { clear:both; }
#my-tags-table td { padding:10px; }
#my-tags-table .add-to-links { white-space:nowrap; }

/* My Reviews */
#my-reviews-table td { padding:10px; }
#my-reviews-table .rating-box { margin:3px 0 0; }

.product-review .product-img-box { float:left; width:140px;  }
.product-review .product-img-box .product-image { display:block; width:125px; height:125px; }
.product-review .product-img-box .label { font-size:11px; margin:0 0 3px; }
.product-review .product-img-box .ratings .rating-box { float:none; display:block; margin:0 0 3px; }
.product-review .product-details { margin-left:150px; }
.product-review .product-name { font-size:16px; font-weight:bold; margin:0 0 10px; }
.product-review h3 { font-size:12px; margin:0 0 3px; color:#2f2f2f; }
.product-review .ratings-table { margin:0 0 10px; }
.product-review dt { font-weight:bold; }
.product-review dd { font-size:13px; margin:5px 0 0; }

/* Billing Agreements */
.billing-agreements .info-box{ margin:15px 0; }
.billing-agreements .info-box p { margin:0 0 5px; }
.billing-agreements .form-list li select { float:left; margin:3px 10px 0 0; }
.billing-agreements .table-caption { font-weight:bold; font-size:13px; }
/* ======================================================================================= */


/* MAP Popup============================================================================== */
.cart-msrp-totals { color:red; font-size:12px !important; font-weight:bold; padding:40px 0 10px; text-align:right; text-transform:uppercase;}
.map-cart-sidebar-total { background:#f6f6f6; color:red; display:block; font-size:10px; line-height:14px; font-weight:bold; padding:5px; text-shadow:0 1px 0 #fff; box-shadow:0 0 3px #ccc; border-radius:5px; }

.map-popup { background:#fff; border:1px solid #aaa; margin:12px 0 0; position:absolute; -moz-box-shadow:0 0 6px #ccc; -webkit-box-shadow:0 0 6px #ccc; box-shadow:0 0 6px #ccc; text-align:left; width:300px; z-index:100; }
.map-popup-heading { background:#efefef ; border-bottom:1px solid #ccc; padding:5px 30px 5px 10px; width:260px; }
.map-popup-heading h2 { font-size:16px; margin:0; text-shadow:0 1px 0 #f6f6f6; overflow:hidden; white-space:nowrap; word-wrap:break-word; text-align:left; text-overflow:ellipsis; }
.map-popup-arrow { background:url(../images/map_popup_arrow.gif) no-repeat; position:absolute; left:50%; top:-10px; height:10px; width:19px; }
.map-popup-close { background:url(../images/btn_window_close.gif) no-repeat; display:block; position:absolute; top:9px; right:10px; height:15px; width:15px; text-indent:-9999em; }
.map-popup-content { border-top:1px solid #eee; padding:10px; overflow:hidden; text-align:left; width:280px; }
.map-popup-checkout { display:inline; float:right; text-align:right; }
.map-popup-checkout span { display:block; padding-right:30px; }
.map-popup-checkout .paypal-logo { margin:0 0 5px; }
.map-popup-price .price-box,
.map-popup-price .price-box .special-price { margin:0; padding:0; }
.map-popup-price { margin:5px 0 0; }
.map-popup-text { clear:right; margin:0 10px; padding:10px 0; text-align:left; word-wrap:break-word; }
.map-popup-only-text { border-top:1px solid #ddd; }
/* ======================================================================================= */


/* Footer ================================================================================ */
.footer-container {}
.footer { margin:15px 0 40px; }
.footer a { color:#444; }

.footer .f-left { width:520px; }
.footer .f-right { width:429px; }

.footer ul { display:inline; }
.footer li { display:inline; background:url(../images/bkg_pipe1.gif) 100% 50% no-repeat; padding:0 5px 0 0; margin:0 3px 0 0; }
.footer .links li.last { background:none !important; padding-right:0 !important; }
.footer .bugs { margin:0; color:#666; }
.footer .bugs a { font-weight:bold; color:#444; }
.footer address { color:#666; }
.footer address a { color:#444; }

.footer .form-subscribe { margin:8px 0; }
.footer .form-subscribe label,
.footer .form-subscribe .input-box,
.footer .form-subscribe button.button { float:left; }
.footer .form-subscribe label { padding-top:2px; font-weight:bold; color:#555; }
.footer .form-subscribe .input-box { width:186px; margin:0 5px; }
.footer .form-subscribe input.input-text { width:180px; }
.footer .form-subscribe button.button span { height:23px; background-image:url(../images/bkg_btn-small.png); line-height:20px; }

.footer .footer-callout { display:block; margin:-10px 0 10px; position:relative; }
.footer .store-switcher { color:#555; text-align:right; }
.footer .store-switcher label { font-weight:bold; vertical-align:middle; }
.footer .store-switcher select { padding:0; vertical-align:middle; }

.footer-container .bottom-container { margin:0 0 8px; text-align:right; }
/* ======================================================================================= */

/* Sample Data============================================================================ */
.home-callout { margin-bottom:12px; }
.home-callout img { display:block }
/*.home-spot { float:left; width:470px; margin-left:20px; }*/
.best-selling h3 { margin:12px 0 6px 0; color:#e25203; font-size:1.2em; }
.best-selling table { border-top:1px solid #ccc; }
.best-selling tr.odd { background:#eee url(../images/best_selling_tr_odd_bg.gif) 0 100% repeat-x; }
.best-selling tr.even { background:#fff url(../images/best_selling_tr_even_bg.gif) 0 100% repeat-x; }
.best-selling td { width:50%; border-bottom:1px solid #ccc; padding:8px 10px 8px 8px; font-size:11px; }
.best-selling .product-img { float:left; border:2px solid #dcdcdc; }
.best-selling .product-description { margin-left:107px; line-height:1.3em; }
.best-selling a.product-name,
.home-spot .best-selling a.product-name:hover { color:#203548; }
/* ======================================================================================= */


/* Clears ================================================================================ */
.clearer:after,
.header-container:after,
.header-container .top-container:after,
.header:after,
.top-bar:after,
.quick-access:after,
.form-search:after,
#nav:after,
.main:after,
.footer:after,
.footer .form-subscribe:after,
.footer-container .bottom-container:after,
.col-main:after,
.col2-set:after,
.col3-set:after,
.col4-set:after,
.search-autocomplete li:after,
.block .block-content:after,
.block .actions:after,
.block li.item:after,
.block-poll li:after,
.block-layered-nav .currently li:after,
.page-title:after,
.products-grid:after,
.products-list li.item:after,
.box-account .box-head:after,
.dashboard .box .box-title:after,
.order-info ul:after,
.box-reviews li.item:after,
.box-tags li.item:after,
.pager:after,
.sorter:after,
.ratings:after,
.add-to-box:after,
.add-to-cart:after,
.product-essential:after,
.product-collateral:after,
.product-tabs:after,
.product-view .product-img-box .more-views ul:after,
.product-view .box-tags .form-add:after,
.product-view .product-shop .short-description:after,
.product-view .box-description:after,
.product-options .options-list li:after,
.product-options-bottom:after,
.product-review:after,
.cart:after,
.cart-collaterals:after,
.cart .crosssell li.item:after,
.opc .step-title:after,
.checkout-progress:after,
.multiple-checkout .place-order:after,
.group-select li:after,
.form-list li:after,
.form-list .field:after,
.buttons-set:after,
.page-print .print-head:after,
.advanced-search-summary:after,
.gift-messages-form .item:after,
.send-friend .form-list li p:after { display:block; content:"."; clear:both; font-size:0; line-height:0; height:0; overflow:hidden; }
/* ======================================================================================= */
