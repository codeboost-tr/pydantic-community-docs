---
title: Aliases
description: Field aliases for JSON field name mapping
---

## Field Aliases

Map Python field names to different JSON names:

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")
    email_address: str = Field(alias="email")

user = User.model_validate({
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice@example.com"
})
print(user.first_name)  # "Alice"
```

## Alias Generator

```python
from pydantic import ConfigDict

class CamelModel(BaseModel):
    model_config = ConfigDict(
        alias_generator=lambda s: "".join(
            word.capitalize() if i > 0 else word
            for i, word in enumerate(s.split("_"))
        ),
        populate_by_name=True,
    )
    first_name: str
    last_name: str

# Accepts {"FirstName": "Alice", "LastName": "Smith"}
# or {"first_name": "Alice", "last_name": "Alice"}
```

## Serialization with Aliases

```python
user.model_dump(by_alias=True)
# {"firstName": "Alice", "lastName": "Smith"}
```
