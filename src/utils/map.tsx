function mapPeriodPaid(value: number) {
    const stringValue = value.toString();
    return `${stringValue.slice(0, 4)}.${stringValue.slice(4)}`;
}

export { mapPeriodPaid };
