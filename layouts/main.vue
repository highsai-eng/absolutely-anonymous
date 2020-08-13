<template>
  <div>

    <v-app id="inspire">
      <v-navigation-drawer app v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp">
        <v-list dense>
          <template v-for="item in items">
            <v-row v-if="item.heading" :key="item.heading" align="center">
              <v-col cols="6">
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-col>
              <v-col cols="6" class="text-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-col>
            </v-row>
            <v-list-group
              v-else-if="item.children"
              :key="item.text"
              v-model="item.model"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="(child, i) in item.children" :key="i" link>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :key="item.text" link>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-app>

    <v-app-bar app color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">匿名きぼんぬ</span>
      </v-toolbar-title>
      <v-text-field
        hide-details
        placeholder="すれっどをタイトルとかタグとかで検索"
        prepend-inner-icon="mdi-magnify"
        class="hidden-sm-and-down" />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <nuxt />

  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        items: [
          { icon: 'mdi-help-circle', text: 'へるぷ'}
          // { icon: 'mdi-contacts', text: 'Contacts' },
          // { icon: 'mdi-history', text: 'Frequently contacted' },
          // { icon: 'mdi-content-copy', text: 'Duplicates' },
          // {
          //   icon: 'mdi-chevron-up',
          //   'icon-alt': 'mdi-chevron-down',
          //   text: 'Labels',
          //   model: true,
          //   children: [
          //     { icon: 'mdi-plus', text: 'Create label' },
          //   ],
          // },
          // {
          //   icon: 'mdi-chevron-up',
          //   'icon-alt': 'mdi-chevron-down',
          //   text: 'More',
          //   model: false,
          //   children: [
          //     { text: 'Import' },
          //     { text: 'Export' },
          //     { text: 'Print' },
          //     { text: 'Undo changes' },
          //     { text: 'Other contacts' },
          //   ],
          // },
          // { icon: 'mdi-cog', text: 'Settings' },
          // { icon: 'mdi-message', text: 'Send feedback' },
          // { icon: 'mdi-help-circle', text: 'Help' },
          // { icon: 'mdi-cellphone-link', text: 'App downloads' },
          // { icon: 'mdi-keyboard', text: 'Go to the old version' },
        ]
      }
    }
  }
</script>

<style>
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
