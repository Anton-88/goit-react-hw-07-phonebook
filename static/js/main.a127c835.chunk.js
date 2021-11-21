(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contact_form_container:"ContactForm_contact_form_container__CQ8hZ",contact_form_item:"ContactForm_contact_form_item__TCTUb",contact_form_label:"ContactForm_contact_form_label__3DSlL",contact_add_btn:"ContactForm_contact_add_btn__3vjhO"}},16:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__jWskN",contact_list_item:"ContactList_contact_list_item__3NYm0",contact_list_button:"ContactList_contact_list_button__3t8fG"}},19:function(t,e,n){t.exports={filter_container:"Filter_filter_container__BpE7c",header:"Filter_header__2HsQl",contacts_amount:"Filter_contacts_amount__3Imto",contacts_amount_zero:"Filter_contacts_amount_zero__1K6VC"}},22:function(t,e,n){t.exports={loader:"Loader_loader__1ZswR",spin:"Loader_spin__Yjy6R"}},28:function(t,e,n){},29:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),s=(n(28),n(29),n(14)),i=n(10),l=n(11),u=n.n(l),d=n(23),_=n(20),b=n(7),j=Object(_.a)({reducerPath:"mockApiSlice",baseQuery:Object(b.d)({baseUrl:"https://6194ee5074c1bd00176c6a4b.mockapi.io/"}),tagTypes:["Contact"],endpoints:function(t){return{getContacts:t.query({query:function(){return"contacts"},providesTags:[{type:"Contacts"}]}),createContact:t.mutation({query:function(t){return{url:"contacts",method:"POST",body:t}},invalidatesTags:[{type:"Contacts"}]}),deleteContact:t.mutation({query:function(t){return{url:"contacts/".concat(t),method:"DELETE"}},invalidatesTags:[{type:"Contacts"}]})}}}),m=j.useGetContactsQuery,h=j.useCreateContactMutation,O=j.useDeleteContactMutation,p=n(2);var f=function(){var t=Object(d.a)(),e=t.handleSubmit,n=t.register,c=t.reset,a=t.formState.errors,r=m().data,o=h(),l=Object(i.a)(o,1)[0];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"PhoneBook"}),Object(p.jsx)("form",{onSubmit:e((function(t){console.log("newContact",t),r.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is in your contacts list already")):(l(t),c())})),children:Object(p.jsxs)("div",{className:u.a.contact_form_container,children:[Object(p.jsxs)("div",{className:u.a.contact_form_item,children:[Object(p.jsx)("label",{className:u.a.contact_form_label,children:"Contact name:"}),Object(p.jsx)("input",Object(s.a)(Object(s.a)({type:"text"},n("name",{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})),{},{name:"name",placeholder:"Enter contact name ...",title:"User name must contain only letters, spaces, apostrophe, dash or the underscore character. For ex, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc....",required:!0})),a.name&&Object(p.jsx)("p",{children:"Name is required."})]}),Object(p.jsxs)("div",{className:u.a.contact_form_item,children:[Object(p.jsx)("label",{className:u.a.contact_form_label,children:"Contact number:"}),Object(p.jsx)("input",Object(s.a)(Object(s.a)({type:"tel",name:"phone"},n("phone",{pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"})),{},{placeholder:"Enter contact number ...",title:"Phone number must contain only digits and may have spaces, dash, round brackets and start with plus(+)",required:!0})),a.phone&&Object(p.jsx)("p",{children:"Phone number is required."})]}),Object(p.jsx)("button",{type:"submit",className:u.a.contact_add_btn,children:"Add contact"})]})})]})},x=n(16),C=n.n(x),y=n(41),v=n(5),g=function(t){return t.filter},N=n(19),F=n.n(N),w=n(1),k=Object(w.b)("filter/value");var L=function(){var t=Object(v.e)(g),e=Object(v.d)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:F.a.header,children:"Contacts"}),Object(p.jsxs)("div",{className:F.a.filter_container,children:[Object(p.jsx)("h2",{children:"Find contact by name"}),Object(p.jsx)("input",{type:"text",value:t,onChange:function(t){return e(k(t.target.value))},placeholder:"Enter filter value ..."})]})]})},q=n(22),E=n.n(q);function T(){return Object(p.jsx)("div",{className:E.a.loader})}var A=function(){var t=Object(v.e)(g),e=m(),n=e.data,c=e.isLoading,a=O(),r=Object(i.a)(a,1)[0];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L,{}),c&&Object(p.jsx)(T,{}),n&&!c&&Object(p.jsx)("ul",{className:C.a.contact_list,children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(t){var e=t.name,n=t.phone,c=t.id;return Object(p.jsxs)("li",{className:C.a.contact_list_item,children:[Object(p.jsxs)("p",{children:[e,": ",n]}),Object(p.jsx)("button",{className:C.a.contact_list_button,type:"button",onClick:function(){return r(c)},children:"Delete number"})]},Object(y.a)())}))})]})};function S(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(A,{})]})}var z,P=n(6),Z=Object(w.d)("",Object(P.a)({},k,(function(t,e){return e.payload}))),B=Object(w.a)({reducer:(z={},Object(P.a)(z,j.reducerPath,j.reducer),Object(P.a)(z,"filter",Z),z),middleware:function(t){return t().concat(j.middleware)}});o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v.a,{store:B,children:Object(p.jsx)(S,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a127c835.chunk.js.map