# Plugin to add custom forms for submitting topics in NodeBB

This plugin was created to add a custom form to the composer when submitting a new topic to a particular category/subcategory

## General Use

This plugin was designed on top of the default composer (it does NOT replace the composer itself) along with the "Persona" theme and "Paper" skin. Also, [this post](https://community.nodebb.org/topic/7830/nodebb-composer-drag-bar-simple-css-tweak/15) was used to re-style the drag bar of the composer.

This plugin has not been developed for easy customization/translation but may hopefully serve as an example for those looking to build their own custom forms.

## Future Improvements

- Optional settings to validate or authenticate "required" fields
- Easier customization through the admin panel (flexibility when creating or deleting categories/subcategories)

## Installation

    npm install nodebb-plugin-custom-topics