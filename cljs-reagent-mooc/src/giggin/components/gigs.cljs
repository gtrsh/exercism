(ns giggin.components.gigs
  (:require [giggin.state :as state]
            [giggin.helpers :refer [format-price]]))

(defn get-gigs
  []
  (for [{:keys [id img title price desc]} (vals @state/gigs)]
    [:div.gig {:key id}
     [:img.gig__artwork {:src img :alt title}]
     [:div.gig__body
      [:div.gig__title
       [:div.btn.btn--primary.float--right.tooltip
        {:data-tooltip "Add to order"
         :on-click #(swap! state/orders update id inc)}
        [:i.icon.icon--plus]] title]
      [:p.gig__price (format-price price)]
      [:p.gig__desc desc]]]))

(defn gigs
  []
  [:main
   [:div.gigs (get-gigs)]])
