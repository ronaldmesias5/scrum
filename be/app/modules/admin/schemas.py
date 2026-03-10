"""
Módulo: modules/admin/schemas.py
Descripción: Schemas Pydantic para creación de usuarios por el administrador.
"""

import re
import uuid

from pydantic import BaseModel, EmailStr, field_validator

from app.modules.auth.schemas import OccupationType


def _validate_password_strength(v: str) -> str:
    """Valida requisitos mínimos de seguridad para contraseñas."""
    if len(v) < 8:
        raise ValueError("La contraseña debe tener al menos 8 caracteres")
    if not re.search(r"[A-Z]", v):
        raise ValueError("La contraseña debe contener al menos una letra mayúscula")
    if not re.search(r"[a-z]", v):
        raise ValueError("La contraseña debe contener al menos una letra minúscula")
    if not re.search(r"\d", v):
        raise ValueError("La contraseña debe contener al menos un número")
    return v


class AdminCreateEmployeeRequest(BaseModel):
    """Schema para que el admin cree una cuenta de empleado."""
    email: EmailStr
    name: str
    last_name: str
    phone: str | None = None
    identity_document: str | None = None
    identity_document_type_id: uuid.UUID | None = None
    occupation: OccupationType
    password: str

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        return _validate_password_strength(v)

    @field_validator("name")
    @classmethod
    def validate_name(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("El nombre debe tener al menos 2 caracteres")
        return v

    @field_validator("last_name")
    @classmethod
    def validate_last_name(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("El apellido debe tener al menos 2 caracteres")
        return v


class AdminCreateClientRequest(BaseModel):
    """Schema para que el admin cree una cuenta de cliente."""
    email: EmailStr
    name: str
    last_name: str
    phone: str | None = None
    identity_document: str | None = None
    identity_document_type_id: uuid.UUID | None = None
    business_name: str | None = None
    password: str

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        return _validate_password_strength(v)

    @field_validator("name")
    @classmethod
    def validate_name(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("El nombre debe tener al menos 2 caracteres")
        return v

    @field_validator("last_name")
    @classmethod
    def validate_last_name(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("El apellido debe tener al menos 2 caracteres")
        return v
