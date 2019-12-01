function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key)
{
  var toBeReturned = Object.assign({}, object)
  delete toBeReturned[key]
  return toBeReturned
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
}
