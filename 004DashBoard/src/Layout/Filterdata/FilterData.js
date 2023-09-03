function HomesFilter(Json, stateOfFiltersJson) {
  return Json.filter((item) => {
    return item["Homes"] === stateOfFiltersJson["Homes"];
  });
}

function Agefilter(Json, stateOfFiltersJson) {
  return Json.filter((item) => {
    return stateOfFiltersJson["Age"].includes(item["Age"]);
  });
}

function CheckForEmptyArray(Json) {
  return Json.length === 0;
}

function RegionFilter(Json, stateOfFiltersJson) {
  if (stateOfFiltersJson["Region"] === "Both") {
    return Json;
  }
  return Json.filter((item) => {
    return item["Region"] === stateOfFiltersJson["Region"];
  });
}

function FilterJSONData(filteredjson, stateOfFiltersJson) {
  let isEmptyArray = false;

  filteredjson = HomesFilter(filteredjson, stateOfFiltersJson);
  filteredjson = Agefilter(filteredjson, stateOfFiltersJson);
  isEmptyArray = CheckForEmptyArray(filteredjson, stateOfFiltersJson);
  if (!isEmptyArray) {
    filteredjson = RegionFilter(filteredjson, stateOfFiltersJson);
  }
  isEmptyArray = CheckForEmptyArray(filteredjson, stateOfFiltersJson);
}
export default FilterJSONData;
