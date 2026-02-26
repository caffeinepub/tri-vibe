import Map "mo:core/Map";
import Text "mo:core/Text";

actor {
  let subscribers = Map.empty<Text, ()>();

  public shared ({ caller }) func subscribeEmail(email : Text) : async Bool {
    switch (subscribers.get(email)) {
      case (null) {
        subscribers.add(email, ());
        true;
      };
      case (?_) { false };
    };
  };
};
