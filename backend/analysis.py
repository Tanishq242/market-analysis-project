import pandas as pd

def file_read(filename):
    return pd.read_feather(f"uploads/{filename}")

def row_count(data):
    return {"rows": data.shape[0], "columns": data.shape[1]}

def file_metadata(data):
    metadata  =  {
        "instruments": data['instrument_type'].unique().tolist(),
        "strikes": sorted(data['strike'].unique().tolist()),
        "expiry": sorted(data['expiry'].unique().tolist()),
        "symbol": data['symbol'].unique().tolist(),
    }
    return metadata

def filter_data(df, filters):
    result = df

    if filters.instruments:
        result = result[
            result["instrument_type"] == filters.instruments
        ]

    if filters.expiry:
        result = result[
            result["expiry"] == filters.expiry
        ]

    if filters.strikes is not None:
        result = result[
            result["strike"] == filters.strikes
        ]

    if filters.symbol:
        result = result[
            result["symbol"] == filters.symbol
        ]

    return result