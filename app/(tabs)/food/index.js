import React from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const HomeScreenCards = ({
  cardHeight,
  one,
  heading,
  subHeading,
  offer,
  imageSrc,
  imgHeight,
  imgWidth,
  dir,
  place
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.CardBox,
        { height: cardHeight, flexDirection: `${dir == 1 ? "column" : "row"}` },
      ]}
    >
        {imageSrc != "" && place==0 && (
        <Image
          source={imageSrc}
          style={{ resizeMode: "contain", width: imgWidth, height: imgHeight }}
        />
      )}
      <View>
        <Text style={styles.cardHeading}>{heading}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {one == 1 && (
            <Image
              source={require("../../../assets/swiggy-one.png")} // Make sure to use `source` instead of `src`
              style={styles.oneImage}
            />
          )}
          {subHeading != "" && (
            <Text style={styles.cardSubHeading}>{subHeading}</Text>
          )}
        </View>
        {offer != "" && <Text style={styles.cardOffers}>{offer}</Text>}
      </View>

      {imageSrc != "" && place==1 && (
        <Image
          source={imageSrc}
          style={{ resizeMode: "contain", width: imgWidth, height: imgHeight }}
        />
      )}
    </TouchableOpacity>
  );
};

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Address Bar  and Profile */}
        <View style={styles.addressBar}>
          {/* Location */}
          <View style={styles.location}>
            <View style={styles.locationHeading}>
              <FontAwesome5
                name="location-arrow"
                size={15}
                color="orange"
                style={{ paddingTop: 8 }}
              />
              <Text style={styles.locationHeadingText} numberOfLines={1}>
                Salarpuria Sattva CardBox, Long White
              </Text>
              <Entypo name="chevron-small-down" size={24} color="gray" />
            </View>
            <View style={styles.locationHeading}>
              <Text style={styles.locationSubHeadingText} numberOfLines={1}>
                Kudiu Main Rd, Puduchcherry - 605637, Muneshwar Nagar
              </Text>
            </View>
          </View>
          {/* Profile  */}
          <View style={styles.profile}>
            <TouchableOpacity style={styles.oneButton}>
              <Image
                source={require("../../../assets/swiggy-one.png")} // Make sure to use `source` instead of `src`
                style={styles.oneImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton} onPress={()=>router.push('/login')}>
              <FontAwesome name="user" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchInput}>
          <TextInput placeholder="Search" style={styles.searchInputText} />
          <View style={styles.iconContainer}>
            <AntDesign name="search1" size={15} color="gray" />
            <Text style={[styles.searchInputText, { fontSize: 20 }]}> | </Text>
            <FontAwesome name="microphone" size={15} color="orange" />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", width: "60%" }}>
            <View tyle={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={require("../../../assets/swiggy-one.png")} // Make sure to use `source` instead of `src`
                style={styles.oneImage}
              />
              <Text style={styles.greetingText}>Exclusive</Text>
            </View>
            <Text style={styles.brandName}>FOOD FIESTA</Text>
            <Text style={styles.descriptionText}>2 OFFERS IN 1 ORDER</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopNowButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../../assets/discount.png")} // Make sure to use `source` instead of `src`
            style={{ width: 150, height: 125, resizeMode: "contain" }}
          />
        </View>

        {/* Home Screen Cards  */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <HomeScreenCards
            cardHeight={100}
            one={0}
            heading={"GUILT FREE OPTIONS"}
            subHeading={""}
            offer={""}
            imageSrc={require("../../../assets/biryani.png")}
            imgHeight={75}
            imgWidth={75}
            dir={0}
            place={1}
          />
          <HomeScreenCards
            cardHeight={100}
            one={0}
            heading={"GOURMET \nDELIGHT"}
            subHeading={""}
            offer={""}
            imageSrc={require("../../../assets/foodPlate.png")}
            imgHeight={75}
            imgWidth={75}
            dir={0}
            place={1}
          />
        </View>
        <Text style={styles.cardHeading}>OFFERS FOR YOU ...</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <HomeScreenCards
            cardHeight={90}
            one={0}
            heading={"Pocket Hero"}
            subHeading={"Up to 60% off"}
            offer={""}
            imageSrc={require("../../../assets/manSpecs.png")}
            imgHeight={50}
            imgWidth={50}
            dir={0}
            place={0}
          />
          <HomeScreenCards
            cardHeight={90}
            one={0}
            heading={"MORE OFFERS"}
            subHeading={"Buy1 Get1 & more"}
            offer={""}
            imageSrc={require("../../../assets/offer.png")}
            imgHeight={75}
            imgWidth={45}
            dir={0}
            place={0}
          />
        </View>

        <Text style={styles.cardHeading}>YOUR TRUSTED PICKS ...</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f3f3f3",
  },
  addressBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  location: {
    flexDirection: "column",
    width: "70%",
  },
  locationHeading: {
    flexDirection: "row",
    justifyContent: "start",
  },
  locationHeadingText: {
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  locationSubHeadingText: {
    padding: 2,
    fontSize: 14,
    color: "gray",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 15,
    backgroundColor: "white",
  },
  searchInputText: {
    fontSize: 17,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
  profileButton: {
    backgroundColor: "gray",
    borderRadius: 50,
    padding: 8,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  oneButton: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "orange",
  },
  oneImage: { resizeMode: "contain", width: 30, height: 30 },
  CardBox: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 10,
    padding: 6,
    width: "48%", // Gives equal space for each card on the row
    marginTop: 5, // Adds top margin to create some space between cards
    borderWidth: 0, // Sets a border around the card
    borderRadius: 20,
    backgroundColor: "white",

    // Shadow properties
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#696969",
    paddingBottom: 5,
  },
  cardSubHeading: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    paddingBottom: 5,
  },
  cardOffers: {
    fontSize: 10,
    fontWeight: "800",
    color: "orange",
    backgroundColor: "#FFD8B2",
    textAlign: "center",
    padding: 2,
    borderRadius: 7,
  },
  greetingText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "orange",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple", // Change color as needed
    marginBottom: 2,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
    color: "gray",
  },
  shopNowButton: {
    backgroundColor: "orange", // Change color as needed
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  shopNowButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Index;
