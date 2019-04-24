import Vue from 'vue'
import Vuikit from 'vuikit'
<% if (options.icons) { %>
import VuikitIcons from '@vuikit/icons'
<% } %>

Vue.use(Vuikit)
<% if (options.icons) { %>
Vue.use(VuikitIcons)
<% } %>
